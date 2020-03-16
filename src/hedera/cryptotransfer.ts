import { CryptoTransferTransaction } from '@hashgraph/sdk'
import {util} from '../utils';

/**
 * A function to handle crypto transfer based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const cryptoTransferController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        try{
            const provider = ((window)as any).provider;
            const accountData :any= ((window as any).HashAccount);
            const {recipientList,memo} = data;
            const account:any = util.getAccountIdObjectFull(accountData.accountId);

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for crypto comming soon!";
                    break;

                case 'software':

                    // sender details
                    let fromAccount :any= {};
                    fromAccount.acc = accountData.accountId.split('.')[2];
                    fromAccount.privateKey= accountData.privateKey;

                    // send amount 
                    let amount = util.sumFromRecipientList(recipientList);
                    
                    let operator :any= util.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = util.createHederaClient(operator,accountData.network);
                    
                    let formattedData :any= {
                        amount,
                        memo,
                        operator,
                        recipientList,
                        account,
                        client,
                        toAccount:util.getAccountIdLikeToObj(recipientList[0].to),
                        network:accountData.network
                    }

                    const response = await cryptoTransfer(formattedData);
                    console.log('RESPONSE CRYPTO INTERNAL::',response);
                    resolve(response);
                    break;
                
                case 'composer':
                    resolve(data);
                    break;
            }

        }catch(e){
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

