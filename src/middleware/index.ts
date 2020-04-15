import {renderMiddlewareSelectorUI} from '../ui-modules/middlewareSelector';
import {setAccountUI} from '../account';
import {util} from '../utils';

export const setProviderUI = (cb?:Function) => {
    return new Promise((resolve,reject)=>{
        if(util.checkEnvironment()==='client'){
            renderMiddlewareSelectorUI((err:any,res:any):any=>{
                const response = setProvider(res.provider);
                cb && cb(err,response);
                err ? reject(err) : resolve(response);
            });
        }else{
            const errorString = 'This function not available in this environment, please try setProvider()';
            cb && cb(errorString);
            reject(errorString);
        }
    })
}

export const setProvider = (provider:string,cb?:Function) => {
    return new Promise((resolve,reject)=>{
        try{
            const env = util.checkEnvironment();
            if(provider==='hardware'){
                throw 'Hardware provider is not available (Coming Soon!)';
            }
            if(env==='server' && provider==='composer'){
                throw 'Cannot set composer as a provider for this environment';
            }
            util.setStoreData(provider,'provider');
            if(env==='client' && provider!=='composer'){
                setAccountUI();
            }
            const message = `Provider is set to ${provider}, Please also set account details if not done already`;
            cb && cb(null,message);
            resolve(message);
        }catch(e){
            const error = util.getFriendlyErrorObject(e);
            cb && cb(error);
            reject(error);
        }
    })
}

