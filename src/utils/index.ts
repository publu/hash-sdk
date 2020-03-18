import { common } from '../validators/common';
import BigNumber from "bignumber.js"


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
 * Copies bytes from given range
 * @param {string} start refers to start of copying range
 * @param {string} length refers to size copying range
 * @param {Uint8Array} bytes refers to original bytes
 * @returns {number} returns copied bytes
 */
const copyBytes = (start:number, length:number, bytes:any) => {
    let newUint = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
        newUint[i] = bytes[start + i];
    }
    return newUint;
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

/**
 * Checks if provider is set globally
 * @returns {any} returns boolean
 */
const isProviderSet = () =>{
    return ((window)as any).provider ? ((window)as any).provider :false;
}

/**
 * Checks string is Array
 * @returns {any} returns string[] or string
 */
const convertIfArray=(value:any)=>{
    try {
        if (value && typeof value === "string" && (/^[\],:{}\s]*$/.test(value.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, '')))) {
            if (common.validateArrayList(value)) {
                return JSON.parse(value);
            } else {
                return value;
            }
        } else {
            return value;
        }
    } catch (e) {
        throw Error('Invalid Array[]');
    }
}

/**
 * Normalizes values of array
 * @param {string[] | Array<string>} arr refers to value passed by function caller
 * @returns {Array | Boolean} returns recipient list or false if invalid
*/
const normalizeArrayValues = (arr:string[]|Array<string>)=> {
    if (arr && Array.isArray(arr) && arr.length > 0) {
        return arr.map((a) => convertIfArray(a))
    }
    return arr;
}

/**
 * Boolean creator
 * @param {any} val refers to value passed by function caller
 * @returns {Boolean} returns Boolean
*/
const getBool =(val:any)=> {
    return Boolean(!!JSON.parse(String(val).toLowerCase()));
}

/**
 * BigNumber convertor
 * @param {number} n refers to value passed by function caller
 * @returns {Boolean} returns BigNumber
*/
const toBigNumber=(n:any)=> {
    n = typeof n !== 'number' ? Number(n) : n;
    return new BigNumber(n);
}

/**
 * AccountId to Hexadecimal address convertor
 * @param {string} accountId refers to value passed by function caller
 * @returns {Boolean} returns hexAddress
*/
const accountIdToHexAddress =(accountId:string)=> {
    let defaultAddress = '0000000000000000000000000000000000000000';
    let accountNo = accountId.split('.')[2];
    let hexAddressRaw = parseInt(accountNo).toString(16);
    let remainingCount = 40 - hexAddressRaw.length;
    let hexAddress = defaultAddress.substr(0, remainingCount) + hexAddressRaw + defaultAddress.substr(remainingCount + hexAddressRaw.length)
    return hexAddress;
}

/**
 * Creates a String Array
 * @param {Array} arr refers to value passed by function caller
 * @returns {Array<string>} returns String array
*/
const createStringArray =(arr:any)=> {
    arr = Array.isArray(arr) ? arr : JSON.parse(arr);
    arr = arr.map((s:string|number) => {
        return s.toString();
    })
    return arr;
}

/**
 * Creates a Number Array
 * @param {Array} arr refers to value passed by function caller
 * @returns {Array<string>} returns Array of Numbers
*/
const createNumberArray=(arr:any)=> {
    let newArr :Array<number>= [];
    arr.forEach((n:any):void|false=>{
        n = Number(n);
        if (!isNaN(n)) {
            newArr.push(n);
        } else {
            return false;
        }
    })
    return newArr;
}

/**
 * Creates a BigNumber Array
 * @param {Array} arr refers to value passed by function caller
 * @returns {Array<string>} returns Array of BigNumbers
*/
const createBigNumberArray=(arr:any)=> {
    let newArr :Array<BigNumber>= [];
    arr.forEach((n:any):void|false => {
        n = toBigNumber(n);
        if (!isNaN(n)) {
            newArr.push(n);
        } else {
            return false;
        }
    })
    return newArr;
}

/**
 * Creates hexadecimal to Decimal
 * @param {string} hexString refers to value passed by function caller
 * @returns {Array<string>} returns decimal value
*/
const hexToDecimal = (hexString:string) => {
    return parseInt(hexString, 16);
}

/**
 * Creates hexadecimal to AccountId
 * @param {string} hexString refers to value passed by function caller
 * @returns {Array<string>} returns account Id format (0.0.12345)
*/
const hexToAccountID = (hexString:string) => {
    const value = hexToDecimal(hexString);
    return `0.0.${value}`;
}

/**
 * Converts hexadecimal to String
 * @param {string} hex refers to value passed by function caller
 * @returns {Array<string>} returns string
*/
const hexToString = (hex:string) => {
    var str = '';
    for (var n = 2; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

/**
 * Extracts constructor from abi
 * @param {Array} abi refers to value passed by function caller
 * @returns {Array<string>} returns string
*/
const getConstructorFromAbi =(abi:any)=> {
    abi.forEach((abiObj:any) => {
        if (abiObj.type === "constructor") {
            return abiObj;
        }
    });
}

export const util = {
    stringToBytes,
    stringToBytesSize,
    getAccountIdObjectFull,
    getAccountIdLikeToObj,
    getAccountObjToIdLike,
    getFriendlyErrorObject,
    sumFromRecipientList,
    isProviderSet,
    normalizeArrayValues,
    convertIfArray,
    getBool,
    toBigNumber,
    accountIdToHexAddress,
    createStringArray,
    createNumberArray,
    createBigNumberArray,
    hexToAccountID,
    hexToDecimal,
    hexToString,
    getConstructorFromAbi,
    copyBytes
}
