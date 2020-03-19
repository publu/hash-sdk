import { ConsensusTopicDeleteTransaction,ConsensusTopicId } from '@hashgraph/sdk';
import {util} from '../utils';
import {helper} from '../helper';

/**
 * A function to handle topic delete based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const topicDeleteController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        try{
           
            const provider = ((window)as any).provider;
         
            const {memo,transactionfee,gasfee} = data;
            let {topicId} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for topic delete comming soon!";
                    break;

                case 'software':
                    const accountData :any= ((window as any).HashAccount);
                    const account:any = util.getAccountIdObjectFull(accountData.accountId);

                    // Creating a Hedera Client
                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);
                 
                    // Converting to Object form
                    topicId = util.getAccountIdLikeToObj(topicId,'topic');                 

                    let updatedData :any= {
                        memo,
                        topicId,
                        account,
                        client,
                        transactionfee,
                        gasfee,
                    }

                    console.log('TOPIC DELETE SDK DATA::',updatedData);
                    let response :any= await topicDelete(updatedData);
                    console.log('TOPIC DELETE SDK RES::',response);

                    // Message Interaction
                    const message = {res:response,type:'success'};
                    window.postMessage(message, window.location.origin);

                    resolve(response);
                    break;
                
                case 'composer':
                    console.log('DATA:::',data)
                    const extensionid = (window as any).extensionId;
                    let domBody = document.getElementsByTagName('body')[0];
                    let hederaTag = document.createElement("hedera-topic-delete");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-topicid", data.topicId || '');
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
 

const topicDelete = async(data:any) =>{
    const {client,topicId} = data;
    const id = new ConsensusTopicId(topicId);

    // Execution to submit Messsage
    const transactionId = await new ConsensusTopicDeleteTransaction()
    .setTopicId(id)
    .execute(client)

    // Fetch transaction reciept
    const transactionReceipt = await transactionId.getReceipt(client)

    let response = {
        nodePrecheckcode: transactionReceipt.status.code,
        receiptStatus: transactionReceipt.status.code,
        transactionId
    };

    return response;
}