import validateCryptoTransferData from './cryptotransferDataValidation';
import validateContractCallData from './contractcallDataValidation';
import validateContractDeployData from './contractdeployDataValidation copy';

// Exports validation as one module for the ease to use it
export const validateService = async(data:any,type:string)=>{
    try{
        switch(type){
            case 'crypto-transfer':
                return validateCryptoTransferData(data);

            case 'contract-call':
                return await validateContractCallData(data);

            case 'contract-deploy':
                return await validateContractDeployData(data);
            
            default:
                throw "No service found!";
                
        }
    }catch(e){
        console.log('Error in Service Validation:::',e);
        throw e;
    }
}