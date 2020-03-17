import { common } from "./common";
import { util } from "../utils";
import {defaults} from "../constants/defaults";
import { helper } from "../helper";

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
const validate = async(data:any) =>{
        try{
            // Something is wrong with the data object, return false
            if (!data) {
                throw new Error('Data is undefined');
            }
    
            // Checks validity of memo
            let memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo)>100) {
                throw new Error('Memo size cannot exceed 100 bytes');
            }

            // Checks validity of contract id
            let contractId = common.isAccountIdLike(data.contractid);
            if (contractId === false) {
                throw new Error('Not a valid contract id');
            }
    
            // Checks validity of abi
            let abi = common.validateArrayList(data.abi);
            if (abi === false) {
                throw new Error('Not a valid abi');
            }

            // Checks validity of params
            let params = common.validateArrayList(data.params);
            if (params === false) {
                try{
                    params = util.normalizeArrayValues(params);
                }catch(e){
                    throw new Error('Error in converting param values');
                }
                throw new Error('Not valid params');
            }

            // Create function params merging abi and params
            let functionParams = await helper.getContractFunctionParams(abi[0],params);

            // Checks validity of amount
            let amount = data.amount ? common.isNumber(data.amount) :0;
            if (amount === false) {
                throw new Error('Not valid Amount');
            }

            // Checks validity of transactionfee
            let transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) :CONTRACT_CALL.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw new Error('Not valid Transaction Fee');
            }

            // Checks validity of gasfee
            let gasfee = data.gasfee ? common.isNumber(data.gasfee) :defaults.CONTRACT_CALL.GAS_FEE;
            if (gasfee === false) {
                throw new Error('Not valid Gas Fee');
            }

            // Returning whatever seems to be necessary
            return({
                memo,
                contractId,
                abi,
                params,
                amount,
                transactionfee,
                gasfee,
                functionParams
            })
    
        }catch(e){
           throw e;
        }
}

export default validate;