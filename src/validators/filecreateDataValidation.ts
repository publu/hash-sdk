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

            // Checks validity of File Contents
            let contents = common.validateArrayList(data.fileContent);
            // @TODO may be we can check is its uint8array convertable if needed
            contents = contents ? new Uint8Array(contents) : contents;
            if (contents === false) {
                throw 'Not valid File Contents';
            }

            // Checks validity of fileSize
            let fileSize = data.fileSize ? common.isNumber(data.fileSize) : defaults.FILE_CREATE.FILE_SIZE;
            if (fileSize === false) {
                throw 'Not valid File Size';
            }

            // Checks validity of transactionfee
            let transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) :defaults.FILE_CREATE.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw 'Not valid Transaction Fee';
            }

            // Checks validity of gasfee
            let gasfee = data.gasfee ? common.isNumber(data.gasfee) :defaults.FILE_CREATE.GAS_FEE;
            if (gasfee === false) {
                throw 'Not valid Gas Fee';
            }

            // Checks validity of expiration time
            let expirationTime = data.expirationtime ? common.isNumber(data.expirationtime) :defaults.FILE_CREATE.EXPIRATION_TIME;
            if (expirationTime === false) {
                throw 'Not valid Expiration Time';
            }

            // Returning whatever seems to be necessary
            return({
                memo,
                fileSize,
                fileContent:data.fileContent,
                contents,
                transactionfee,
                expirationTime,
                gasfee,
            })
    
        }catch(e){
           throw e;
        }
}

export default validate;