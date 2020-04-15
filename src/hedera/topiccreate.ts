import { ConsensusTopicCreateTransaction,KeyList,Ed25519PublicKey } from '@hashgraph/sdk';
import {util} from '../utils';
import {helper} from '../helper';

/**
 * A function to handle topic create based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const topicCreateController =(data:any)=> {
    const env = util.checkEnvironment();

    return new Promise(async(resolve,reject)=>{
        try{
           
            const provider = util.getStoreData('provider');;
         
            const {memo,submitKeyList,autoRenewAccount,autoRenewPeriod,transactionfee,gasfee} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for topic create comming soon!";
                    break;

                case 'software':
                    const accountData :any= util.getStoreData('HashAccount');
                    const account:any = util.getAccountIdObjectFull(accountData.accountId);

                    // Creating a Hedera Client
                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);
                 
                    let updatedData :any= {
                        memo,
                        submitKeyList,
                        autoRenewAccount,
                        autoRenewPeriod,
                        account,
                        client,
                        transactionfee,
                        gasfee,
                    }

                    let response :any= await topicCreate(updatedData);

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
                    let hederaTag = document.createElement("hedera-topic-create");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-submitkeylist", data.submitKeyList ? JSON.stringify(data.submitKeyList): '');
                    hederaTag.setAttribute("data-expirationtime", data.expirationTime || '');
                    hederaTag.setAttribute("data-autorenewperiod", data.autoRenewPeriod || '');
                    hederaTag.setAttribute("data-autorenewaccount", data.autoRenewAccount || '');
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
 

const topicCreate = async(data:any) =>{
    const {client,memo,autoRenewAccount,autoRenewPeriod,submitKeyList,transactionfee,expirationTime} = data;

    let transactionId :any= await new ConsensusTopicCreateTransaction()
        .setTopicMemo(memo)
        .setMaxTransactionFee(transactionfee)
        .setAdminKey(client._operatorPublicKey)

    // Sets expiry if given
    if (expirationTime && !isNaN(expirationTime)) {
        transactionId.setExpirationTime(Date.now() + expirationTime)
    }

    // Sets autoRenewPeriod if given
    if (autoRenewPeriod && !isNaN(autoRenewPeriod)) {
        transactionId.setAutoRenewPeriod(autoRenewPeriod)
    }

    // Sets autoRenewAccount if given
    if (autoRenewAccount) {
        transactionId.setAutoRenewAccount(autoRenewAccount)
    }

    if (submitKeyList && submitKeyList.length > 0) {
        let keyList = new KeyList()
        for (let k of submitKeyList) {
            keyList.add(Ed25519PublicKey.fromString(k))
        }
        transactionId = await transactionId.setSubmitKey(keyList)
    }

    // Execution to create topic
    transactionId = await transactionId.execute(client)

    // Fetch transaction reciept
    const transactionReceipt = await transactionId.getReceipt(client)

    // Get the newly generated topic Id
    const topicId = transactionReceipt.getConsensusTopicId()

    let response = ({
         nodePrecheckcode: transactionReceipt.status.code,
         receiptStatus: transactionReceipt.status.code,
         transactionId,
         topicId
     })

    return response;
}