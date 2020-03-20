import { ContractExecuteTransaction, Status } from '@hashgraph/sdk';
import { AbiCoder } from 'web3-eth-abi';
import forge from 'node-forge';
import {util} from '../utils';
import {helper} from '../helper';

/**
 * A function to handle contract call based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
export const contractCallController =(data:any)=> {
    return new Promise(async(resolve,reject)=>{
        try{
           
            const provider = ((window)as any).provider;
         
            const {memo,transactionfee,amount,gasfee,contractId,functionParams,abi} = data;

            switch(provider){
                case 'hardware':
                    //@TODO flow comming soon
                    throw "Hardware option for contract call comming soon!";
                    break;

                case 'software':
                    const accountData :any= ((window as any).HashAccount);
                    const account:any = util.getAccountIdObjectFull(accountData.accountId);

                    // Converting to Object form
                    const contractIdLike = util.getAccountIdLikeToObj(contractId,'contract');

                    // Creating a Hedera Client
                    let operator :any= helper.createClientOperator(account.accountIdObject,accountData.keys.privateKey)
                    let client = helper.createHederaClient(operator,accountData.network);
                 
                    let updatedData :any= {
                        abi,
                        amount,
                        memo,
                        account,
                        client,
                        contractId:contractIdLike,
                        functionParams,
                        transactionfee,
                        gasfee
                    }

                    let response :any= await contractCall(updatedData);

                    // Message Interaction
                    const message = {res:response,type:'success'};
                    window.postMessage(message, window.location.origin);

                    resolve(response);
                    break;
                
                case 'composer':
                    const extensionid = (window as any).extensionId;
                    let domBody = document.getElementsByTagName('body')[0];
                    let hederaTag = document.createElement("hedera-contract");
                    hederaTag.setAttribute("data-contractid", data.contractId || '');
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-params", data.params ? JSON.stringify(data.params) : '[]');
                    hederaTag.setAttribute("data-abi", JSON.stringify(data.abi) || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-gasfee", data.gasfee || '');
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-amount", data.amount || '');
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
 

const contractCall = async(data:any) =>{
    const {memo,contractId,transactionfee,amount,gasfee,abi,client,functionParams} = data;
    let transactionId = await new ContractExecuteTransaction()
    .setContractId(contractId)
    .setFunction(abi[0].name, functionParams)
    .setMaxTransactionFee(parseInt(transactionfee))
    .setGas(gasfee)
    .setTransactionMemo(memo)
    .setPayableAmount(amount)
    .execute(client);

    let contractCallRecord = await transactionId.getRecord(client);

    if (contractCallRecord && contractCallRecord.receipt && contractCallRecord.receipt.status.code == Status.Success.code) {

        let finalResult = {
            status: "success",
            ok: true,
            code: 200,
            message: "",
            result: []
        }

        if (abi[0].outputs && abi[0].outputs.length > 0 && contractCallRecord.getContractExecuteResult() && contractCallRecord.getContractExecuteResult().asBytes().length > 0) {
            const abiCoder = new AbiCoder()
            let result = abiCoder.decodeParameters(abi[0].outputs, '0x' + forge.util.bytesToHex((contractCallRecord.getContractExecuteResult().asBytes() as any)).toString())
            if (result) {
                let resultArray :any= [];
                Object.keys(result).forEach(function (key, index) {
                    if (index < abi[0].outputs.length) {
                        let output = "" + result[key];

                        if (abi[0].outputs[index].type.toString().includes("[]")) {
                            let valuesArray = output.split(',');
                            valuesArray.forEach(element => {
                                if (abi[0].outputs[index].type == "address[]") {
                                    element = util.hexToAccountID(element);
                                } else if (abi[0].outputs[index].type == "bytes[]") {
                                    element = util.hexToString(element);
                                }
                                resultArray.push(element);
                            });
                        } else if (abi[0].outputs[index].type == "bytes") {
                            output = util.hexToString(output);
                            resultArray.push(output);
                        } else {
                            if (abi[0].outputs[index].type == "address") {
                                output = util.hexToAccountID(output);
                            }
                            resultArray.push(output);
                        }
                    }
                })
                finalResult.result = resultArray;
            }
        }
        return finalResult;
       
    } else {
        let message = contractCallRecord && contractCallRecord.getContractExecuteResult() ? contractCallRecord.getContractExecuteResult().errorMessage : ""
        throw message;
    }
}

