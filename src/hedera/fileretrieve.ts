import { FileContentsQuery } from '@hashgraph/sdk';
import {util} from '../utils';
import {helper} from '../helper';
const fileType = require('file-type/browser');


/**
 * A function to handle file retrieve based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const fileRetrieveController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        try{
           
            const provider = ((window)as any).provider;
         
            const {memo,fileId,transactionfee,gasfee} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for file retrieve comming soon!";
                    break;

                case 'software':
                    const accountData :any= ((window as any).HashAccount);
                    const account:any = util.getAccountIdObjectFull(accountData.accountId);

                    // Creating a Hedera Client
                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);
                 
                    let updatedData :any= {
                        memo,
                        fileId,
                        account,
                        client,
                        transactionfee,
                        gasfee,
                    }

                    let response :any= await fileRetrieve(updatedData);

                    // Message Interaction
                    const message = {res:response,type:'success'};
                    window.postMessage(message, window.location.origin);

                    resolve(response);
                    break;
                
                case 'composer':
                    const extensionid = (window as any).extensionId;
                    let domBody = document.getElementsByTagName('body')[0];
                    let hederaTag = document.createElement("hedera-file-retrieve");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-fileId", data.fileId || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    // @TODO extension not accepting txs fees
                    hederaTag.setAttribute("data-transactionfee",'');
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
 

const fileRetrieve = async(data:any) =>{
    const {fileId,transactionfee,client} = data;

    let fileQueryResp = await new FileContentsQuery()
        .setFileId(fileId)
        .setMaxQueryPayment(transactionfee)
        .execute(client);
  
    let contentAsString = Buffer.from(fileQueryResp).toString();
    const type = await fileType.fromBuffer(fileQueryResp);

    let response :any= {
        contents: Array.from(fileQueryResp),
        contentAsString: contentAsString
    }
    if(type){
        response.fileType=type;
    }
    return response;
}