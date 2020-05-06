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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'account-info');
            const res = await accountInfoController(updatedData);
            handleResponse(res);
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'crypto-transfer');
            const res = await cryptoTransferController(updatedData);
            handleResponse(res);
            
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'contract-call');
            const res = await contractCallController(updatedData);
            handleResponse(res);
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'contract-deploy');
            const res = await contractDeployController(updatedData);
            handleResponse(res);
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'file-create');
            const res = await fileCreateController(updatedData);
            handleResponse(res);
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'file-retrieve');
            const res = await fileRetrieveController(updatedData);
            handleResponse(res);
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'topic-create');
            const res = await topicCreateController(updatedData);
            handleResponse(res);  
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'topic-update');
            const res = await topicUpdateController(updatedData);
            handleResponse(res);  
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'topic-info');
            const res = await topicInfoController(updatedData);
            handleResponse(res);   
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            checkPrerequisites();
            const updatedData = await validateService(data,'topic-delete');
            const res = await topicDeleteController(updatedData);
            handleResponse(res);   
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
            _callback=callback
            _resolve=resolve;
            _reject=reject;
            const updatedData = await validateService(data,'submit-message');
            const res = await submitMessageController(updatedData);
            handleResponse(res);   
        }catch(error){
            let err = util.getFriendlyErrorObject(error)
            callback && callback(err);
            reject(err);          
        }
    });
}

const handleResponse =(data:any)=>{
    if(data && data.type){
        if(data.type.includes('deny')){
            _callback && _callback(data.res,null);
            _reject && _reject(data.res);
        }else{
            const rectifiedResponse = util.convertIfArray(data.res);
            _callback && _callback(null, rectifiedResponse);
            _resolve && _resolve(data.res);
        }
    }
   
}

/**
 * Accepts message event and returns to promise and callback
 * @param {MessageEvent} event
 */
const receiveMessage =(event:MessageEvent)=> {
    if (event.data.type && event.origin === window.location.origin) {
        handleResponse(event.data)
    }
}

const checkPrerequisites = () =>{
    if(!util.getStoreData('provider')){
        throw 'Please set your provider (i.e hardware,composer or software)';
    }else if(util.getStoreData('provider')!=='composer'){
        if(!util.getStoreData('HashAccount')){
            throw 'Please set your account details (network, private key and account id)'
        }else if(!util.getStoreData('HashAccount').network){
            throw 'Please set your network (i.e mainnet or testnet)'
        }else if(!util.getStoreData('HashAccount').accountId){
            throw 'Please set your accountId (0.0.1234)'
        }else if(!util.getStoreData('HashAccount').keys){
            if(!util.getStoreData('HashAccount').keys.privateKey){
                throw 'Please set your private key'
            }else{
                return true;
            }
        }else{
            return true;
        }
    }else{
        return true;
    }
    
}

/**
 * 'message' event listener to catch messages from composer or software responses
 */
if(util.checkEnvironment()==='client'){
    window.addEventListener("message", receiveMessage, false);
}
