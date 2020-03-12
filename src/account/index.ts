
import { renderAccountSetterUI } from '../ui-modules/accountSetter';
// interface IKeys{
//     privateKey:string,
//     publicKey?:string,
//     mnemonics?:string
// }

export const setAccount = (cb?:Function) => {
    return new Promise((resolve,reject)=>{
        renderAccountSetterUI((err:any,res:any):any=>{
            // setMiddleware(res.provider);
            cb && cb(err,res);
            err ? reject(err) : resolve(res);
        });
    })
}
