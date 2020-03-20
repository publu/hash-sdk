import {renderMiddlewareSelectorUI} from '../ui-modules/middlewareSelector';
import {setAccount} from '../account'

export const selectProvider = (cb?:Function) => {
    return new Promise((resolve,reject)=>{
        renderMiddlewareSelectorUI((err:any,res:any):any=>{
            setProvider(res.provider);
            if(((window)as any).provider === 'software'){
                //@TODO handle below
              setAccount();
            }else{
                cb && cb(err,res);
                err ? reject(err) : resolve(res);
            }
        });
    })
}

const setProvider = (provider:string) => {

    ((window)as any).provider = provider;

    switch(provider){
        case 'hardware':
            //@TODO include when hardware comes in
            break;
        
        case 'composer':
           
            break;
        
        case 'software':
            break;
    }
}
