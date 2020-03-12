import {renderMiddlewareSelectorUI} from '../ui-modules/middlewareSelector';

export const selectMiddleware = (cb?:Function) => {
    return new Promise((resolve,reject)=>{
        renderMiddlewareSelectorUI((err:any,res:any):any=>{
            setMiddleware(res.provider);
            cb && cb(err,res);
            err ? reject(err) : resolve(res);
        });
    })
}

const setMiddleware = (provider:string) => {
    ((window)as any).middleware = provider;

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
