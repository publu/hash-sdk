import { cryptoTransfer } from "../hedera/cryptotransfer";
import {validate} from '../validators';
import {util} from '../utils';

export const triggerCryptoTransfer = (data:any) =>{
    return new Promise((resolve,reject)=>{
        validate.validateCrytoTransferData(data,async(err:any,res:any)=>{
            try{
                if(!err && res){
                    const response = await cryptoTransfer(res);
                    resolve(response);
                }else{
                    throw err;
                }
            }catch(e){
                let err = util.getFriendlyErrorObject(e)
                console.log('Error in cryptoTransfer:::',e);
                reject(err);
            }    
        });
    })
}
