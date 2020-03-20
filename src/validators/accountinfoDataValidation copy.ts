import { common } from "./common";

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
const validate = async(data:any) =>{
        try{
            // Checks validity of contract id
            let accountId =  data && data.accountID ? common.isAccountIdLike(data.accountID) : '';
            if (accountId === false) {
                throw ('Not a valid account id');
            }

            // Returning whatever seems to be necessary
            return({
                accountId
            })
    
        }catch(e){
           throw e;
        }
}

export default validate;