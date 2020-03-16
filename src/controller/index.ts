import { cryptoTransferController } from "../hedera/cryptotransfer";
import {validateService} from '../validators';
import {util} from '../utils';

/**
 * triggers exposed crypto service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerCryptoTransfer = (data:any,callback?:Function) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = validateService(data,'crypto-transfer');
            const response = await cryptoTransferController(updatedData);
            callback && callback(null,response)
            resolve(response);
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in cryptoTransfer:::',error);
            callback && callback(err);
            reject(err);
        }
    });
}
