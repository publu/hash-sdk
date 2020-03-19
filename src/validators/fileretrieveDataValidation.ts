import { common } from "./common";
import { util } from "../utils";
import {defaults} from "../constants/defaults";
/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
const validate = async(data:any) =>{
        try{
            // Something is wrong with the data object, return false
            if (!data) {
                //@TODO make error constants
                throw 'Data is undefined';
            }
    
            // Checks validity of memo
            let memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo)>100) {
                throw 'Memo size cannot exceed 100 bytes';
            }

            // Checks validity of file id
            let fileId = data.fileId ? common.isAccountIdLike(data.fileId) : '';
            if (fileId === false) {
                throw 'Not a valid file id';
            }

            // Checks validity of transactionfee
            let transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) :defaults.FILE_RETRIEVE.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw 'Not valid Transaction Fee';
            }

            // Checks validity of gasfee
            let gasfee = data.gasfee ? common.isNumber(data.gasfee) :defaults.FILE_RETRIEVE.GAS_FEE;
            if (gasfee === false) {
                throw 'Not valid Gas Fee';
            }

            // Returning whatever seems to be necessary
            return({
                memo,
                fileId,
                transactionfee,
                gasfee,
            })
    
        }catch(e){
           throw e;
        }
}

export default validate;