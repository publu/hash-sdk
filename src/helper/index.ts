import {util} from '../utils';
import {common} from '../validators/common';
import { 
    Client,
    Mnemonic,
    Ed25519PrivateKey,
    ContractFunctionParams,
    FileCreateTransaction,
    FileAppendTransaction,
    ContractCreateTransaction
} from '@hashgraph/sdk'
import {IAccountIdLike,IOperator} from '../interface';

/**
 * Merges abi and params to return hedera compatible data
 * @param {Array} abi refers to abi array value passed by caller
 * @param {Array} params refers to params aarray value passed by caller
 * @returns {any} returns functionParams 
*/
const getContractFunctionParams = (abi:any, params:any)=> {
    
    // Function params instance
    let functionParams = new ContractFunctionParams();

    if (abi && abi.inputs && abi.inputs.length > 0) {
        try {
            abi.inputs.forEach((data:any, index:number) => {
                if (data.type == 'string') {
                    const value = params[index].toString();
                    if (value) {
                        if (common.isString(value)) {
                            functionParams.addString(value)
                        } else {
                            throw Error('Input is not string')
                        }
                    } else {
                        throw Error('Input string can not be empty')
                    }
                } else if (data.type == "bool") {
                    if (params[index] === true || params[index] === false) {
                        functionParams.addBool(params[index])
                    } else if (params[index] == "true" || params[index] == "false") {
                        const value = util.getBool(params[index]);
                        if (typeof value === 'boolean') {
                            functionParams.addBool(value)
                        } else {
                            throw Error('Input is not boolean(true/false)')
                        };
                    } else {
                        throw Error('Input boolean can not be empty')
                    }
                } else if (data.type == "int32") {
                    const value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addInt32(value)
                    } else {
                        throw Error('Input is not a valid Int32 number')
                    };
                } else if (data.type == "int64") {
                    const value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addInt64(util.toBigNumber(params[index]))
                    } else {
                        throw Error('Input is not a valid Int64 number')
                    };
                } else if (data.type == "int256") {
                    const value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addInt256(util.toBigNumber(params[index]))
                    } else {
                        throw Error('Input is not a valid Int256 number')
                    };
                } else if (data.type == "uint32") {
                    const value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addUint32(value)
                    } else {
                        throw Error('Input is not a valid Uint32 number')
                    };
                } else if (data.type == "uint64") {
                    const value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addUint64(util.toBigNumber(params[index]))
                    } else {
                        throw Error('Input is not a valid Uint64 number')
                    };
                } else if (data.type == "uint256") {
                    const value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addUint256(util.toBigNumber(params[index]))
                    } else {
                        throw Error('Input is not a valid uint256 number')
                    };
                } else if (data.type === "address") {
                    let inputAddress = params[index].toString();
                    const value =  inputAddress.split('.').length===3 ? util.accountIdToHexAddress(inputAddress) : inputAddress;
                    if (common.isAccountIdAddress(value)) {
                        functionParams.addAddress(value) 
                    } else {
                        throw Error('Input is not a valid address(string)')
                    };
                } else if (data.type == "string[]") {
                    let value = params[index];
                    if (Array.isArray(value)) {
                        value = util.createStringArray(value);
                        functionParams.addStringArray(value)
                    } else {
                        throw Error('Input is not a valid string array')
                    };
                } else if (data.type == "int32[]") {
                    let value = Array.isArray(params[index]) ? util.createNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addInt32Array(value)
                    } else {
                        throw Error('Input is not a valid int32(number) array')
                    };
                } else if (data.type == "int64[]") {
                    let value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addInt64Array(value)
                    } else {
                        throw Error('Input is not a valid int64(number) array')
                    };
                } else if (data.type == "int256[]") {
                    let value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addInt256Array(value)
                    } else {
                        throw Error('Input is not a valid int256(number) array')
                    };
                } else if (data.type == "uint32[]") {
                    let value = Array.isArray(params[index]) ? util.createNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addUint32Array(value)
                    } else {
                        throw Error('Input is not a valid int32(number) array')
                    };
                } else if (data.type == "uint64[]") {
                    let value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addUint64Array(value)
                    } else {
                        throw Error('Input is not a valid int64(number) array')
                    };
                } else if (data.type == "uint256[]") {
                    let value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addUint256Array(value)
                    } else {
                        throw Error('Input is not a valid int256(number) array')
                    };
                } else if (data.type == "address[]") {
                    const value = common.isAddressArray(params[index])
                    if (value) {
                        functionParams.addAddressArray(value)
                    } else {
                        throw Error('Input is not a valid address(string) array')
                    };
                } else if (data.type == "bytes") {
                    let value = params[index];
                    if (value) {
                        functionParams.addBytes(value.toString())
                    } else {
                        throw Error('Input can not be empty bytes')
                    }
                } else if (data.type == "bytes[]") {
                    let value = params[index];
                    if (Array.isArray(value)) {
                        functionParams.addBytesArray(value)
                    } else {
                        throw Error('Input is not a valid bytes array')
                    };
                }
            })
            return functionParams;
        } catch (e) {
            throw Error(e.message || "Error while creating ContractFunctionParams")
        }
    } else {
        return functionParams;
    }
}
/**
 * Create a valid hedera client
 * @param {Object} operator
 * @param {Object} network
 * @returns {any} returns hedera client
 */

const createHederaClient = (operator:IOperator,network:string) => {
    const currentNetwork = network;
    let client;
    if (currentNetwork == 'testnet') {
        client = Client.forTestnet();
    } else {
        client = Client.forMainnet();
    }
    client.setOperator(operator.account, operator.privateKey);
    return client;
}

/**
 * Create a valid hedera Operator
 * @param {Object} account
 * @param {string} privateKey
 * @returns {any} returns hedera client operator
 */
const createClientOperator = (account:IAccountIdLike,privatekey:string) => {
    const privateKey = Ed25519PrivateKey.fromString(privatekey)
    return {
        account,
        privateKey
    }
}

/**
 * Create a hedera file
 * @param {Client} client
 * @param {Object} firstPartBytes
 * @param {Date}  expirationTime
 * @param {number} txFee
 * @param {string} memo
 * @returns {any} returns receipt
 */
const createFile = async(client:any, firstPartBytes:any, expirationTime:any, txFee:number, memo:string)=> {
    let transactionId = await new FileCreateTransaction()
        .setContents(firstPartBytes)
        .setExpirationTime(expirationTime)
        .addKey(client._getOperatorKey())
        .setTransactionMemo(memo)
        .setMaxTransactionFee(txFee)
        .execute(client);
    const response = await transactionId.getReceipt(client);
    return { ...response }
}

/**
 * Appends file content to an already created hedera file
 * @param {Client} client
 * @param {Object} fileId
 * @param {string} contents
 * @param {number} txFee
 * @returns {any} returns receipt
 */
const appendFile = async(client:any, fileId:any, contents:any, txFee:number)=> {
    let transactionId = await new FileAppendTransaction()
        .setFileId(fileId)
        .setContents(contents)
        .setMaxTransactionFee(txFee)
        .execute(client);

    let response = await transactionId.getReceipt(client);
    return { ...response }
}

/**
 * Creates Contract transaction with fileId
 * @param {Client} client
 * @param {Object} fileId
 * @param {any} constructorParams
 * @param {number} amount
 * @param {number} gasFee
 * @param {number} txFee
 * @param {string} memo
 * @param {Date} autoRenewPeriod
 * @returns {any} returns receipt
 */
const createContractTx = async(client:any,fileId:any, constructorParams:any, amount :number=0, gasFee:number, txFee:number,memo:string, autoRenewPeriod:any) => {
    //autoRenewPeriod = autoRenewPeriod + 0; // Just to evade tslint
    let transactionId = await new ContractCreateTransaction()
        .setBytecodeFileId(fileId)
        .setGas(gasFee)
        .setAutoRenewPeriod(autoRenewPeriod)
        .setAdminKey(client._getOperatorKey())
        .setConstructorParams(constructorParams)
        .setInitialBalance(amount)
        .setTransactionMemo(memo)
        .setMaxTransactionFee(txFee)
        .execute(client);
    const receipt = await transactionId.getReceipt(client);
    return {
        receipt: { ...receipt },
        transactionId
    }
}

/**
 * Creates key pairs out of menmonics or phrase
 * @param {string} menmonics
 * @param {Boolean} supportsDerivation (optional)
 * @returns {any} returns receipt
 */
const generateKeysFromMnemonics = async(mnemonics:string, supportsDerivation = true) => {
    const mnemonicsResult = Mnemonic.fromString(mnemonics);
    let rootKey = await Ed25519PrivateKey.fromMnemonic(mnemonicsResult, "");
    let privateKey, publicKey;
    if (rootKey.supportsDerivation == true && supportsDerivation == true) {
        privateKey = rootKey.derive(0).toString().substring(32)
        publicKey = rootKey.derive(0).publicKey.toString().substring(24)
    } else {
        privateKey = rootKey.toString().substring(32)
        publicKey = rootKey.publicKey.toString().substring(24)
    }
    privateKey += publicKey
    return {
        mnemonic: mnemonics,
        privateKey,
        publicKey
    }
}

export const helper ={
    createClientOperator,
    createHederaClient,
    getContractFunctionParams,
    createFile,
    appendFile,
    createContractTx,
    generateKeysFromMnemonics
}