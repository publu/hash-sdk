import {util} from '../utils';
import {helper} from '../helper';
import {AccountBalanceQuery} from '@hashgraph/sdk';

/**
 * A function to handle getting account Info based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const accountInfoController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        const env = util.checkEnvironment();

        try{

            const provider = util.getStoreData('provider');
            const {accountId} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for account info comming soon!";
                    break;

                case 'software':
                    const accountData :any= util.getStoreData('HashAccount');
                    const account:any = accountId ? util.getAccountIdObjectFull(accountId) : util.getAccountIdObjectFull(accountData.accountId);

                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);

                    let updatedData :any= {
                        accountData,
                        account,
                        client,
                    }

                    let response :any= await accountInfo(updatedData);
                    // Message Interaction
                    const message = {res:response,type:'success'};
                    if(env==='client'){
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    break;
                
                case 'composer':
                    let domBody = document.getElementsByTagName('body')[0];
                    let hederaTag = document.createElement("hedera-balance");
                    hederaTag.setAttribute("data-accountID", data.accountId || '');
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
 

const accountInfo = async(data:any) =>{
    const {client,account,accountData} = data;
    const balance = await new AccountBalanceQuery()
                    .setAccountId(account.accountIdLike)
                    .execute(client)
    const network = accountData.network || 'Not Set';
    return{
        accountId:account.accountIdLike,
        currentNetwork:network,
        balance:balance.asTinybar().toString()
    }
}

