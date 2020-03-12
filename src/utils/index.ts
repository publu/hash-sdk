// export const supportCallbackAndPromiseResponse =(err:any,res:any,cb?:Function):any=>{
//     if(cb){
//         cb(err,res);
//     }else{
//         return new Promise((resolve,reject)=>{
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(res);
//             }
//         })
//     }
// }