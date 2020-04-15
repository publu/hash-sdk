import { Status } from '@hashgraph/sdk';
import {util} from '../utils';
import {helper} from '../helper';
import {defaults} from '../constants/defaults';

/**
 * A function to handle contract deploy based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const contractDeployController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        const env = util.checkEnvironment();

        try{
           
            const provider = util.getStoreData('provider');;
         
            const {memo,transactionfee,amount,gasfee,fileId,expirationTime,bytecode,abi,params,functionParams} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for contract deploy comming soon!";
                    break;

                case 'software':
                    const accountData :any= util.getStoreData('HashAccount');
                    const account:any = util.getAccountIdObjectFull(accountData.accountId);

                    // Converting to Object form
                    const fileIdLike = fileId ? util.getAccountIdLikeToObj(fileId,'file') : null;

                    // Converting to date format
                    const expirationtime = Date.now() + expirationTime;

                    // Creating a Hedera Client
                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);
                 
                    let updatedData :any= {
                        abi,
                        amount,
                        memo,
                        account,
                        client,
                        fileId:fileIdLike,
                        transactionfee,
                        gasfee,
                        functionParams,
                        expirationtime,
                        bytecode,
                        params
                    }

                    let response :any= await contractDeploy(updatedData);

                    // Message Interaction
                    const message = {res:response,type:'success'};
                    if(env==='client'){
                        window.postMessage(message, window.location.origin);
                    }

                    resolve(message);
                    break;
                
                case 'composer':
                    const extensionid = util.getStoreData('extensionId');
                    let domBody = document.getElementsByTagName('body')[0];
                    let hederaTag = document.createElement("hedera-deploy-contract");
                    hederaTag.setAttribute("data-fileid", data.fileId || '');
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-params", data.params ? JSON.stringify(data.params): '[]');
                    hederaTag.setAttribute("data-abi", JSON.stringify(data.abi) || '');
                    hederaTag.setAttribute("data-bytecode", data.bytecode || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-gasfee", data.gasfee || '');
                    // @TODO extension not accepting txs fees
                    hederaTag.setAttribute("data-transactionfee", '');
                    hederaTag.setAttribute("data-amount", data.amount || '');
                    hederaTag.setAttribute("data-expirationTime", data.expirationTime ||'');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    break;
            }

        }catch(e){

            // Message Interaction
            const message = {res:e,type:'deny'};
            if(env==='client'){
                window.postMessage(message, window.location.origin);
            }

            reject(message);
        }
    })
}
 

const contractDeploy = async(data:any) =>{

    const {memo,transactionfee,amount,gasfee,client,bytecode,expirationtime,functionParams} = data;
    let {fileId} = data;
    const autoRenewPeriod = defaults.CONTRACT_DEPLOY.AUTORENEW_PERIOD;

    if (!fileId) {
        let fileCreateTx = await fileCreateDeploy(client,bytecode, memo, transactionfee, expirationtime);
        if (fileCreateTx.status.code === Status.Success.code) {
            fileId = (fileCreateTx as any)._fileId
        } else {
            return fileCreateTx
        }
    }

    let contractCreateResult = await helper.createContractTx(client,fileId, functionParams, amount, gasfee, parseInt(transactionfee), memo, autoRenewPeriod);
    // const contractId = (contractCreateResult.receipt as any)._contractId;
    
    const contractDeployTx = { ...contractCreateResult.receipt }

    if (contractDeployTx.status.code === Status.Success.code) {
        return contractDeployTx;
    } else {
        throw (contractDeployTx as any).codeName || 'Error in Contract deployment'
    }
}

const fileCreateDeploy = async(client:any,bytecode:string, memo :string= "Composer File Create",txFee:number,expirationTime:any)=> {
   
    if (!bytecode) {
        throw new Error('Bytecode can not be empty!')
    }

    let contents = util.stringToBytes(bytecode);

    let FILE_PART_SIZE = 2800; // 3K bytes
    let numParts = Math.floor(contents.length / FILE_PART_SIZE);
    let remainder = contents.length % FILE_PART_SIZE;
    var firstPartBytes = null;
    let moreContents = false;

    if (contents.length <= FILE_PART_SIZE) {
        firstPartBytes = contents;
        remainder = 0;
    } else {
        moreContents = true;
        firstPartBytes = util.copyBytes(0, FILE_PART_SIZE, contents);
    }

    let fileReceipt = await helper.createFile(client, firstPartBytes, expirationTime, txFee, memo);

    if (moreContents) {
        if (fileReceipt.status.code === Status.Success.code) {
            const fileId = (fileReceipt as any)._fileId

            for (let i = 1; i < numParts; i++) {
                let partBytes = util.copyBytes(i * FILE_PART_SIZE, FILE_PART_SIZE, contents);
                const fileAppendResult = await helper.appendFile(client, fileId, partBytes, txFee)
                if (fileAppendResult.status.code !== Status.Success.code) {
                    throw new Error("Error Appending File");
                }
            }

            if (remainder > 0) {
                let partBytes = await util.copyBytes(numParts * FILE_PART_SIZE, remainder, contents);
                const fileAppendResult = await helper.appendFile(client, fileId, partBytes, txFee)
                if (fileAppendResult.status.code !== Status.Success.code) {
                    throw new Error("Error Appending Last Chunks");
                }
            }

        }
    }
    return fileReceipt;
}