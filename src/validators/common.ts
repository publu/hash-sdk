
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
 * Validates recipient List
 * @param {string[] | Array<string>} arr refers to value passed by function caller
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
    isAccountIdObject
}

