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
                throw 'Data is undefined';
            }
    
            // Checks validity of memo / topic name
            let memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo)>100) {
                throw 'Memo size cannot exceed 100 bytes';
            }

            // Checks validity of topic id
            let topicId = common.isAccountIdLike(data.topicId);
            if (topicId === false) {
                throw ('Not a valid topic id');
            }

            // Checks validity of submitKeyList
            let submitKeyList = data.submitKeyList ? common.validateArrayList(data.submitKeyList) : [];
            //@TODO In-depth validation of public keys can be done
            if (submitKeyList === false) {
                throw ('Not a valid submitKeyList');
            }
         
            // Checks validity of transactionfee
            let transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) :defaults.CONTRACT_CALL.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw ('Not valid Transaction Fee');
            }

            // Checks validity of gasfee
            let gasfee = data.gasfee ? common.isNumber(data.gasfee) :defaults.CONTRACT_CALL.GAS_FEE;
            if (gasfee === false) {
                throw ('Not valid Gas Fee');
            }
              
            // Checks validity of autoRenewAccount id
            let autoRenewAccount = data.autoRenewAccount ? common.isAccountIdLike(data.autoRenewAccount):'';
            if (autoRenewAccount === false) {
                throw ('Not a valid auto renew account id');
            }

            // Checks validity of auto renew time
            let autoRenewPeriod = data.autoRenewPeriod ? common.isNumber(data.autoRenewPeriod) :defaults.TOPIC_CREATE.AUTORENEW_PERIOD;
            if (autoRenewPeriod === false) {
                throw 'Not valid Auto Renew Period';
            }
    

            // Returning whatever seems to be necessary
            return({
                memo,
                topicId,
                submitKeyList,
                autoRenewAccount,
                autoRenewPeriod,
                transactionfee,
                gasfee,
            })
    
        }catch(e){
           throw e;
        }
}

export default validate;