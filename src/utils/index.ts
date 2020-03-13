import { common } from '../validators/common';
import { Client } from '@hashgraph/sdk'
import { Ed25519PrivateKey } from '@hashgraph/sdk'

import {IAccountIdLike,IOperator} from '../interface';

/**
 * Converts any string to bytes[]
 * @param {string} s refers to value passed by function caller
 * @returns {Uint8Array} returns unit8 array bytes[]
 */
const stringToBytes = (s:string):Uint8Array => {
    let arrayBuffer = new ArrayBuffer(s.length * 1);
    let newUint = new Uint8Array(arrayBuffer);
    newUint.forEach((_, i) => {
        newUint[i] = s.charCodeAt(i);
    });
    return newUint;
}

/**
 * Gives the bytes size of a given string
 * @param {string} s refers to value passed by function caller
 * @returns {number} returns size in bytes
 */
const stringToBytesSize = (s:string):number => {
    if(s){
        s=s.toString();
        // returns the byte length of an utf8 string
        var size = s.length;
        for (var i=s.length-1; i>=0; i--) {
        var code = s.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) size++;
        else if (code > 0x7ff && code <= 0xffff) size+=2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
        }
        return size;
    }else{
        return 0;
    }   
}

/**
 * Gives the account id object
 * @param {string} id refers to value passed by function caller
 * @param {type} type refers to type of account id(account, contract,file,topic)
 * @returns {Object} returns account id object
 */
const getAccountIdLikeToObj = (id:string,type:string='account'):object => {
    const idArr = id.split('.');
    return {shard:Number(idArr[0]),realm:Number(idArr[1]),[type]:Number(idArr[2])};
}

/**
 * Gives the account id like string
 * @param {Object} id refers to value passed by function caller
 * @returns {string} returns account id string
 */
const getAccountObjToIdLike = (id:Object):string => {
    const values:Array<string> = Object.keys(id);
    return `${values[0]}.${values[1]}.${values[2]}.`;
}

/**
 * Gives the full account id Object that contains all types of id format
 * @param {string|Object|number} id refers to value passed by function caller
 * @returns {Object} returns object with different id types
 */
const getAccountIdObjectFull = (id:string|Object|number,type:string='account') => {
    id = common.isHederaId(id);
    let accountObj = {
        accountIdLike:'',
        accountIdObject:{}
    }
    if(!id){
        return id;
    }
    if(common.isAccountIdLike(id)){
        accountObj.accountIdLike = id.toString();
        accountObj.accountIdObject = getAccountIdLikeToObj(id.toString(),type);
        return accountObj;
    }
    else if(common.isAccountIdObject(id)){
        accountObj.accountIdLike = getAccountObjToIdLike(id);
        accountObj.accountIdObject = id;
        return accountObj;
    }
    else{
        return id;
    }
}

/**
 * Gives a string of the error 
 * @param {any} e refers to error value passed by function caller
 * @returns {Object} returns error string
 */
const getFriendlyErrorObject = (e:any):Object => {
    const errorString = typeof e === 'string' ? e : typeof e.message === 'string' ? e.message :  typeof e.msg === 'string' ? e.msg : 'Sorry, Something went wrong!';
    return {
        errorString,
        error:e
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
    let client
    if (currentNetwork == 'testnet') {
        client = new Client({
            operator: operator
        })
    } else {
        client = new Client({
            network: {
                "https://proxy.hashingsystems.com": { shard: 0, realm: 0,  account: 3 }
            },
            operator: operator
        });
    }
    return client;
}

/**
 * Create a valid hedera client
 * @param {Object} account
 * @param {Object} network
 * @returns {any} returns hedera client
 */
const createClientOperator = (account:IAccountIdLike,privatekey:string) => {
    const privateKey = Ed25519PrivateKey.fromString(privatekey)
    return {
        account,
        privateKey
    }
}

/**
 * Add up the amount in recipient list
 * @param {Array} recipientList
 * @returns {any} returns hedera client
 */
const sumFromRecipientList = (recipientList:any) => {
    //@TODO REctify the function
    // recipientList must always exist
    if (recipientList === undefined || recipientList.length === 0) {
        // undefined is only returned when there recipientList is invalid
        return 0;
    }
    let requestedPayment = 0
    for (var k in recipientList) {
        requestedPayment += parseInt(recipientList[k].tinybars)
    }
    return requestedPayment
}


export const util = {
    stringToBytes,
    stringToBytesSize,
    getAccountIdObjectFull,
    getAccountIdLikeToObj,
    getAccountObjToIdLike,
    getFriendlyErrorObject,
    createHederaClient,
    createClientOperator,
    sumFromRecipientList
}

// export const supportCallbackAndPromiseResponse =(err:any,res:any,cb?:Function):any=>{
//     if(cb){
//         cb(err,res);
//     }else{
//         return new Promise((resolve,reject)=>{
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(res);
//             }
//         })
//     }
// }