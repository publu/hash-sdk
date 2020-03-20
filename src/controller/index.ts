import { accountInfoController } from '../hedera/accountinfo';
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


/**
 * triggers exposed check balance and account details call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export const triggerCheckBalance = (data:any,callback?:Function) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            util.isProviderSet();
            const updatedData = await validateService(data,'account-info');
            await accountInfoController(updatedData);
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            callback && callback(err);
            reject(err);          
        }
    });
}

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
            const rectifiedResponse = util.convertIfArray(event.data.res);
            _callback && _callback(null, rectifiedResponse);
            _resolve && _resolve(event.data.res);
        }
    }
}

/**
 * 'message' event listener to catch messages from composer or software responses
 */
window.addEventListener("message", receiveMessage, false);
