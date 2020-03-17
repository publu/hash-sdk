import validateCryptoTransferData from './cryptotransferDataValidation';
import validateContractCallData from './contractcallDataValidation';

// Exports validation as one module for the ease to use it
export const validateService = (data:any,type:string)=>{
    try{
        switch(type){
            case 'crypto-transfer':
                return validateCryptoTransferData(data);

            case 'contract-call':
                return validateContractCallData(data);
            
            default:
                throw "No service found!";
                
        }
    }catch(e){
        console.log('Error in Service Validation:::',e);
        throw e;
    }
}