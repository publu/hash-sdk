import { cryptoTransferController } from "../hedera/cryptotransfer";
import { contractCallController } from "../hedera/contractcall";
import { contractDeployController } from '../hedera/contractdeploy';
import {validateService} from '../validators';
import {util} from '../utils';

let _callback :any= null;

let _resolve :any= null;
let _reject :any= null;

((window)as any).HashAccount={
    accountId:'0.0.17210',
    keys:{
        privateKey:"302e020100300506032b657004220420dc3460f46df4673acfbce2f2218990fff07e38e24b99c4bb2b8213f6e275f9b9"
    },
    mnemonics:'',
    network:'testnet'
};

((window)as any).provider = 'composer';
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

/**
 * triggers exposed contract call service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerSmartContract = (data:any,callback?:Function) =>{
    
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'contract-call');
            await contractCallController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            
            
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in contractCall:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * triggers exposed contract deploy service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const deploySmartContract = (data:any,callback?:Function) =>{
    
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'contract-deploy');
            await contractDeployController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            
            
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in contractDeploy:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}
    
const receiveMessage =(event:MessageEvent)=> {
    if (event.data.type && event.origin === window.location.origin) {
        if(event.data.type.includes('deny')){
            _callback && _callback(event.data.res,null);
            _reject && _reject(event.data.res);
        }else{
            _callback && _callback(null, event.data.res);
            _resolve && _resolve(event.data.res);
        }
    }
}

window.addEventListener("message", receiveMessage, false);
