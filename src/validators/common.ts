
import {util} from '../utils'
import { SHA3 } from 'sha3';

/**
 * Validates if given value is of type string
 * @param {any} s refers to value passed by function caller
 * @returns {string | Boolean} returns string if true and false respectively
 */
const isString = (s:any) => typeof s === 'string' ? s : false;

/**
 * Validates if given value is of type number
 * @param {any} n refers to value passed by function caller
 * @returns {number | Boolean} returns number if true and false respectively
 */
const isNumber = (n:any) => !isNaN(Number(n)) ? Number(n) : false;

/**
 * Validates if given value is accountId address(0x.. or 0000.. [hex])
 * @param {any} id refers to value passed by function caller
 * @returns {Boolean} returns account id  of type string if true and false respectively
 */
const isAccountIdAddress = (id:string) => {
    // check if it has the basic requirements of an address
    if (!/^(0x)?[0-9a-f]{40}$/i.test(id)) {
        return false;
    // If it's ALL lowercase or ALL upppercase
    } else if(/^(0x|0X)?[0-9a-f]{40}$/.test(id) || /^(0x|0X)?[0-9A-F]{40}$/.test(id)) {
        return true;
    // Otherwise check each case
    } else {
        return checkAddressChecksum(id);
    }
}

/**
 * Validates if given value is accountId address(0x.. or 0000.. [hex])
 * @param {any} id refers to value passed by function caller
 * @returns {Boolean} returns validation
 */
const checkAddressChecksum =(address:string)=> {
    // Check each case
    // address = address.replace(/^0x/i, '');
    var addressHash = new SHA3().update(address.toLowerCase().replace(/^0x/i, '')).digest("hex")//SHA3Hash(address.toLowerCase()).replace(/^0x/i, '');

    for (var i = 0; i < 40; i++) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
};

/**
 * Validates if given value is accountIdlike(0.0.12345)
 * @param {any} id refers to value passed by function caller
 * @returns {string | Boolean} returns account id  of type string if true and false respectively
 */
const isAccountIdLike = (id:any) => id && typeof id === 'string' && id.split('.').length === 3 && !isNaN(Number(id.split('.')[0])) && !isNaN(Number(id.split('.')[1])) && !isNaN(Number(id.split('.')[2])) ? id : false;

/**
 * Validates if given value is account Object{shard:0,realm:0,contract|account|file|topic:1234}
 * @param {any} id refers to value passed by function caller
 * @returns {Object | Boolean} returns account id  of type object if true and false respectively
 */
const isAccountIdObject = (id:any) => id && typeof id === 'object'  && id.shard && id.realm && (id.account || id.file || id.contract || id.topic) ? id : false ;

/**
 * Validates if given value is hedera id of type account Id and account Object
 * @param {any} id refers to value passed by function caller
 * @returns {string | Boolean} returns account id  of type string if true and false respectively
 */
const isHederaId = (id:any):Object|string|Boolean => id && typeof id === 'string' && id.split('.').length === 3 ? id : typeof id === 'object' && id.shard && id.realm && (id.account || id.file || id.contract || id.topic) ? id : false;

/**
 * Validates if given value is an array
 * @param {string[] | Array<string>} arr refers to value passed by function caller
 * @returns {Array | Boolean} returns array or false respectively
 */
const validateArrayList = (arr:any) => {
    try {
        if (arr && Array.isArray(arr) && arr.length>0) {
            return arr;
        }else if(JSON.parse(arr)){
            return JSON.parse(arr);
        }else{
            return false;
        }
    } catch (e) {
        return false;
    }
}

/**
 * Validates if array has list of account addresses 
 * @param {Array} addArr refers to value passed by function caller
 * @returns {Array | Boolean} returns array or false respectively
 */
const isAddressArray =(addArr:any)=> {
    let newArray :Array<string>= [];
    if (Array.isArray(addArr) && addArr.length > 0) {
        addArr.forEach((a:string):any => {
            a = a.split('.').length===3 ? util.accountIdToHexAddress(a) : a;
            if (!isAccountIdAddress(a)) {
                return false
            }
            newArray.push(a);
        })
        return newArray;
    } else {
        return false;
    }
}

/**
 * Validates recipient List
 * @param {string[] | Array<string>} recipientList refers to value passed by function caller
 * @returns {Array | Boolean} returns recipient list or false if invalid
*/
const validateRecipientList = (recipientList:any) => {
    recipientList = validateArrayList(recipientList)
    if (recipientList === false) {
        return false;
    }
    let requestedPayment = 0
    for (var k in recipientList) {
        requestedPayment += parseInt(recipientList[k].tinybars)
        try {
           common.isAccountIdLike(recipientList[k].to)
        } catch (e) {
            return false
        }
    }
    if (isNaN(requestedPayment)) {
        return false
    }
    return recipientList
}

export const common = {
    isString,
    isNumber,
    isAccountIdLike,
    isHederaId,
    validateArrayList,
    validateRecipientList,
    isAccountIdObject,
    isAccountIdAddress,
    isAddressArray
}

