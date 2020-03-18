import { common } from "./common";
import { util } from "../utils";
import {defaults} from "../constants/defaults";
import {helper} from '../helper';
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
            let fileId = data.fileid ? common.isAccountIdLike(data.fileid) : '';
            if (fileId === false) {
                throw 'Not a valid file id';
            }
    
            // Checks validity of abi
            let abi = common.validateArrayList(data.abi);
            if (abi === false) {
                throw 'Not a valid abi';
            }

            // Checks validity of params
            let params = common.validateArrayList(data.params);
            if (params === false) {
                try{
                    params = util.normalizeArrayValues(params);
                }catch(e){
                    throw 'Error in converting param values';
                }
                throw 'Not valid params';
            }

            // Create function params merging abi and params
            let functionParams = await helper.getContractFunctionParams(abi[0],params);

            // Checks validity of amount
            let amount = data.amount ? common.isNumber(data.amount) :0;
            if (amount === false) {
                throw 'Not valid Amount';
            }

            // Checks validity of transactionfee
            let transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) :defaults.CONTRACT_DEPLOY.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw 'Not valid Transaction Fee';
            }

            // Checks validity of gasfee
            let gasfee = data.gasfee ? common.isNumber(data.gasfee) :defaults.CONTRACT_DEPLOY.GAS_FEE;
            if (gasfee === false) {
                throw 'Not valid Gas Fee';
            }

            // Checks validity of expiration time
            let expirationTime = data.expirationtime ? common.isNumber(data.expirationtime) :defaults.CONTRACT_DEPLOY.EXPIRATION_TIME;
            if (expirationTime === false) {
                throw 'Not valid Expiration Time';
            }

            // Checks validity of bytecode
            let bytecode = common.isString(data.bytecode);
            if (bytecode === false) {
                throw 'Not a valid Bytecode';
            }

            // Returning whatever seems to be necessary
            return({
                memo,
                fileId,
                abi,
                params,
                amount,
                transactionfee,
                expirationTime,
                gasfee,
                bytecode,
                functionParams
            })
    
        }catch(e){
           throw e;
        }
}

export default validate;