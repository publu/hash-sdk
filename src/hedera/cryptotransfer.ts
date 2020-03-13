import { CryptoTransferTransaction } from '@hashgraph/sdk'
import {util} from '../utils';

export const cryptoTransfer =(data:any)=> {
    new Promise(async(resolve,reject)=>{
        try{
            const accountData :any= ((window as any).HashAccount);
            console.log('ACCOUNT DATA',accountData)
            const recipientList = data.recipientList;
            const memo = data.memo;
            const account:any = util.getAccountIdObjectFull(accountData.accountId);

            // sender details
            let fromAccount :any= {};
            fromAccount.acc = accountData.accountId.split('.')[2];
            fromAccount.privateKey= accountData.privateKey;

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

            const res = await doCryptoTransfer(formattedData);
            formattedData.receipt = true
            formattedData.transactionId = res.transactionId
            console.log('CRYPTO RECIEPT', formattedData)
     
            resolve({
                nodePrecheckcode: res.receipt.status.code,
                receiptStatus: res.receipt.status.code,
                transactionId: res.transactionId
            })

        }catch(e){
            let err = util.getFriendlyErrorObject(e)
            console.log('Error in cryptoTransfer:::',e);
            reject(err);
        }
    })
}


export const doCryptoTransfer = async(data:any) =>{
   const transactionId = await new CryptoTransferTransaction()
       .addSender(data.account.accountIdObject, data.amount)
       .addRecipient(data.toAccount, data.amount)
       .setTransactionMemo(data.memo)
       //.setTransactionFee(1000000)
       .execute(data.client);
   const receipt = await transactionId.getReceipt(data.client);

   return {
       transactionId: transactionId.toString(),
       receipt: { ...receipt }
   }
}

