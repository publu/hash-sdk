import { cryptoTransferController } from "../hedera/cryptotransfer";
import {validateService} from '../validators';
import {util} from '../utils';

let _callback :any= null;

let _resolve :any= null;
let _reject :any= null;

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
            await cryptoTransferController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            
            
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in cryptoTransfer:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}
    
const receiveMessage =(event:MessageEvent)=> {
    console.log('MESSAGE RECVD',event);
    if (event.data.type && event.origin === window.location.origin) {
        if(event.data.type.includes('deny')){
            console.log('REDIRECT TO DENY',event);
            _callback && _callback(event.data.res,null);
            _reject && _reject(event.data.res);
        }else{
            console.log('REDIRECT TO SUCCESS',event);
            _callback && _callback(null, event.data.res);
            _resolve && _resolve(event.data.res);
        }
    }
}

window.addEventListener("message", receiveMessage, false);
