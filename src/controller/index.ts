import { cryptoTransferController } from "../hedera/cryptotransfer";
import { contractCallController } from "../hedera/contractcall";
import { contractDeployController } from '../hedera/contractdeploy';
import { fileCreateController } from '../hedera/filecreate';
import { fileRetrieveController } from '../hedera/fileretrieve';
import { topicCreateController } from '../hedera/topiccreate';
import { topicUpdateController } from '../hedera/topicupdate';
import { topicInfoController } from '../hedera/topicinfo';
import { topicDeleteController } from '../hedera/topicdelete';
import { submitMessageController } from '../hedera/submitmessage';


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
            const updatedData = await validateService(data,'crypto-transfer');
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

/**
 * triggers exposed file create service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerFileCreate = (data:any,callback?:Function) =>{
    
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'file-create');
            await fileCreateController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            
            
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in fileCreate:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * triggers exposed file retrieve service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerFileRetrieve = (data:any,callback?:Function) =>{
    
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'file-retrieve');
            await fileRetrieveController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            
            
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in fileRetrieve:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * triggers exposed topic create service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerTopicCreate = (data:any,callback?:Function) =>{  
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'topic-create');
            await topicCreateController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
                
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in topicCreate:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * triggers exposed topic update service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerTopicUpdate = (data:any,callback?:Function) =>{  
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'topic-update');
            await topicUpdateController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
                
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in topicUpdate:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * triggers exposed topic info service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerTopicInfo = (data:any,callback?:Function) =>{  
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'topic-info');
            await topicInfoController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
                
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in topicInfo:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * triggers exposed topic delete service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerTopicDelete = (data:any,callback?:Function) =>{  
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'topic-delete');
            await topicDeleteController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
                
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in topicDelete:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * triggers exposed submit message service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerSubmitMessage = (data:any,callback?:Function) =>{  
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'submit-message');
            await submitMessageController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
                
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            console.log('Error in submitMessage:::',error);
            callback && callback(err);
            reject(err);          
        }
    });
}

/**
 * Accepts message event and returns to promise and callback
 * @param {MessageEvent} event
 */
const receiveMessage =(event:MessageEvent)=> {
    if (event.data.type && event.origin === window.location.origin) {
        if(event.data.type.includes('deny')){
            _callback && _callback(event.data.res,null);
            _reject && _reject(event.data.res);
        }else{
            //@TODO Rectify JSON stringified responses for composer
            _callback && _callback(null, event.data.res);
            _resolve && _resolve(event.data.res);
        }
    }
}

/**
 * 'message' event listener to catch messages from composer or software responses
 */
window.addEventListener("message", receiveMessage, false);
