import { CryptoTransferTransaction } from '@hashgraph/sdk'
import {util} from '../utils';
import {helper} from '../helper';

/**
 * A function to handle crypto transfer based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const cryptoTransferController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        try{
            ((window)as any).HashAccount={
                accountId:'0.0.17210',
                keys:{
                    privateKey:"302e020100300506032b657004220420dc3460f46df4673acfbce2f2218990fff07e38e24b99c4bb2b8213f6e275f9b9"
                },
                mnemonics:'',
                network:''
            };
            ((window)as any).provider = 'software';
            const provider = ((window)as any).provider;
         
            const {recipientList,memo} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for crypto comming soon!";
                    break;

                case 'software':
                    const accountData :any= ((window as any).HashAccount);
                    const account:any = util.getAccountIdObjectFull(accountData.accountId);

                    // sender details
                    let fromAccount :any= {};
                    fromAccount.acc = accountData.accountId.split('.')[2];
                    fromAccount.privateKey= accountData.privateKey;

                    // send amount 
                    let amount = util.sumFromRecipientList(recipientList);
                    
                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);
                    
                    let updatedData :any= {
                        amount,
                        memo,
                        account,
                        client,
                        toAccount:util.getAccountIdLikeToObj(recipientList[0].to),
                    }

                    let response :any= await cryptoTransfer(updatedData);
                    console.log('RESPONSE CRYPTO INTERNAL::',response);

                    // Message Interaction
                    const message = {res:response,type:'success'};
                    window.postMessage(message, window.location.origin);

                    resolve(response);
                    break;
                
                case 'composer':
                    const extensionid = (window as any).extensionId;
                    let domBody = document.getElementsByTagName('body')[0];
                    let hederaTag = document.createElement("hedera-micropayment");
                    hederaTag.setAttribute("data-time", '');
                    hederaTag.setAttribute("data-memo", memo || ' ');
                    hederaTag.setAttribute("data-contentid", '');
                    hederaTag.setAttribute("data-type", '');
                    hederaTag.setAttribute("data-redirect", '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-recipientlist", JSON.stringify(recipientList) || '');
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
 

const cryptoTransfer = async(data:any) =>{
   const transactionId = await new CryptoTransferTransaction()
       .addSender(data.account.accountIdObject, data.amount)
       .addRecipient(data.toAccount, data.amount)
       .setTransactionMemo(data.memo)
       //.setTransactionFee(1000000)
       .execute(data.client);
   const receipt = await transactionId.getReceipt(data.client);

    return({
        nodePrecheckcode: receipt.status.code,
        receiptStatus: receipt.status.code,
        transactionId: transactionId
    })
}

