import { common } from "./common";
import { util } from "../utils";

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
const validate = (data:any,callback:Function) =>{

    try{

    }catch(e){
        let err = util.getFriendlyErrorObject(e)
        console.log('Error in cryptovalidation:::',e);
        callback(err);
    }
    // Something is wrong with the data object, return false
    if (!data) {
        throw new Error('Data is undefined');
    }

    // Checks validity of memo
    let memo = common.isString(data.memo) || '';
    if (util.stringToBytesSize(memo)>100) {
        throw new Error('Memo size cannot exceed 100 bytes');
    }

    // Checks validity of recipient list
    let recipientList = common.validateRecipientList(data.recipientlist);
    if (recipientList === false) {
        throw new Error('Not a valid recipient list');
    }

    // Returning whatever seems to be necessary
    callback(null,{
        memo,
        recipientList
    })
}

export default validate;