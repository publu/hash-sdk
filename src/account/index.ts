
import { renderAccountSetterUI } from '../ui-modules/accountSetter';
import {util} from '../utils';
import {helper} from '../helper';
import {common} from '../validators/common';
import {IAccountDataLike} from '../interface';

export const setAccountUI = (cb?:Function) => {
    return new Promise((resolve,reject)=>{
        if(util.checkEnvironment()==='client'){
            console.log('STAGE 1')
            renderAccountSetterUI((err:any,res:any):any=>{
                // setMiddleware(res.provider);
                console.log('STAGE 2',err,res)

                cb && cb(err,res);
                err ? reject(err) : resolve(res);
            });
        }else{
            const errorString = 'This function not available in this environment, please try setAccount()';
            cb && cb(errorString);
            reject(errorString);
        }
        
    })
}

export const setAccount = (accountData:IAccountDataLike,cb?:Function) => {
    return new Promise(async(resolve,reject)=>{
        try{
            accountData.network = accountData.network ? accountData.network.toLowerCase().trim() : '';
            if(accountData.network!=='mainnet' && accountData.network!=='testnet'){
                throw 'Please provide a valid network (testnet or mainnet)';
            }
            if(accountData.accountId && !common.isAccountIdLike(accountData.accountId)){
                throw 'Please provide a valid accountId (0.0.1234)';
            }
            if((accountData.keys && accountData.keys.privateKey)||accountData.mnemonics){
                if(accountData.keys && accountData.keys.privateKey){
                    // Already handled
                }else{
                    const mnemonics = accountData.mnemonics;
                    if(mnemonics){
                        accountData.keys = await helper.generateKeysFromMnemonics(mnemonics);
                    }
                }
                util.setStoreData(accountData,'HashAccount');
                const message = 'Account is successfully set';
                cb && cb(null,message);
                resolve(message);
            }else{
                throw `Either privateKey or mnemonics should be provided`;
            }
        }catch(e){
            const error = util.getFriendlyErrorObject(e);
            cb && cb(error);
            reject(error);
        }
    })
}