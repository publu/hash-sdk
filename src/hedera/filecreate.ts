import { Status } from '@hashgraph/sdk';
import {util} from '../utils';
import {helper} from '../helper';

/**
 * A function to handle file create based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const fileCreateController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        try{
           
            const provider = ((window)as any).provider;
         
            const {memo,contents,transactionfee,gasfee,expirationTime} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for file create comming soon!";
                    break;

                case 'software':
                    const accountData :any= ((window as any).HashAccount);
                    const account:any = util.getAccountIdObjectFull(accountData.accountId);

                    // Converting to date format
                    const expirationtime = Date.now() + expirationTime;

                    // Creating a Hedera Client
                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);
                 
                    let updatedData :any= {
                        memo,
                        contents,
                        account,
                        client,
                        transactionfee,
                        gasfee,
                        expirationtime,
                    }

                    let response :any= await fileCreate(updatedData);

                    // Message Interaction
                    const message = {res:response,type:'success'};
                    window.postMessage(message, window.location.origin);

                    resolve(response);
                    break;
                
                case 'composer':
                    const extensionid = (window as any).extensionId;
                    let domBody = document.getElementsByTagName('body')[0];
                    // @TODO shift tag names to constants
                    let hederaTag = document.createElement("hedera-file-create");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-fileContent", JSON.stringify(data.fileContent) || '');
                    hederaTag.setAttribute("data-fileSize", data.fileSize || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    // @TODO extension not accepting txs fees
                    hederaTag.setAttribute("data-transactionfee",'');
                    hederaTag.setAttribute("data-expirationTime", data.expirationTime || '' );
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    break;
            }

        }catch(e){

            // Message Interaction
            const message = {res:e,type:'deny'};
            window.postMessage(message, window.location.origin);

            reject(e);
        }
    })
}
 

const fileCreate = async(data:any) =>{
    const {memo,contents,transactionfee,client,expirationtime} = data;

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

    let fileReceipt = await helper.createFile(client, firstPartBytes, expirationtime, transactionfee, memo);
    
    // @INFO If u need transaction Id
    // let transactionId = (fileReceipt as any).transactionId;
    
    fileReceipt = { ...(fileReceipt as any) };
    if (moreContents) {
        if (fileReceipt.status.code === Status.Success.code) {
            const fileId = (fileReceipt as any)._fileId
            for (let i = 1; i < numParts; i++) {
                let partBytes = util.copyBytes(i * FILE_PART_SIZE, FILE_PART_SIZE, contents);
                const fileAppendResult = await helper.appendFile(client, fileId, partBytes, transactionfee)
                if (fileAppendResult.status.code !== Status.Success.code) {
                    throw new Error("Error Appending File");
                }
            }
            if (remainder > 0) {
                let partBytes = util.copyBytes(numParts * FILE_PART_SIZE, remainder, contents);
                const fileAppendResult = await helper.appendFile(client, fileId, partBytes, transactionfee)
                if (fileAppendResult.status.code !== Status.Success.code) {
                    throw new Error("Error Appending Last Chunks");
                }
            }
        }
    }

    if (fileReceipt.status.code === Status.Success.code) {
       return fileReceipt;
    } else {
        throw (fileReceipt as any).codeName;
    }
}