import { common } from "./common";
import { util } from "../utils";

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
const validate = (data:any) =>{
        try{
            // Something is wrong with the data object, return false
            if (!data) {
                throw ('Data is undefined');
            }
    
            // Checks validity of memo
            let memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo)>100) {
                throw ('Memo size cannot exceed 100 bytes');
            }
    
            // Checks validity of recipient list
            let recipientList = common.validateRecipientList(data.recipientlist);
            if (recipientList === false) {
                throw ('Not a valid recipient list');
            }

            // Returning whatever seems to be necessary
            return({
                memo,
                recipientList
            })
    
        }catch(e){
           throw e;
        }
    }

export default validate;