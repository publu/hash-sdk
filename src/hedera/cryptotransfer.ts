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
        const env = util.checkEnvironment();

        try{
            const provider = util.getStoreData('provider');;
            const {recipientList,memo} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for crypto comming soon!";
                    break;

                case 'software':
                    const accountData :any= util.getStoreData('HashAccount');
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
            if(env==='client'){
                window.postMessage(message, window.location.origin);
            }

            reject(message);
        }
    })
}
 

const cryptoTransfer = async(data:any) =>{
    console.log('datat:::',data)

   const transactionId = await new CryptoTransferTransaction()
       .addSender(data.account.accountIdObject, data.amount)
       .addRecipient(data.toAccount, data.amount)
       .setTransactionMemo(data.memo)
       //.setTransactionFee(1000000)
       .execute(data.client);
   const receipt = await transactionId.getReceipt(data.client);
   console.log('reciept:::',receipt,data)

    return({
        nodePrecheckcode: receipt.status.code,
        receiptStatus: receipt.status.code,
        transactionId: transactionId
    })
}

