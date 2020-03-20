
import validateAccountInfoData from './accountinfoDataValidation copy';
import validateCryptoTransferData from './cryptotransferDataValidation';
import validateContractCallData from './contractcallDataValidation';
import validateContractDeployData from './contractdeployDataValidation';
import validateFileCreateData from './filecreateDataValidation';
import validateFileRetrieveData from './fileretrieveDataValidation';
import validateTopicCreateData from './topiccreateDataValidation'
import validateTopicUpdateData from './topicupdateDataValidation'
import validateTopicInfoData from './topicinfoDataValidation'
import validateTopicDeleteData from './topicdeleteDataValidation'
import validateSubmitMessageData from './submitMessageDataValidation'


// Exports validation as one module for the ease to use it
export const validateService = async(data:any,type:string)=>{
    try{
        switch(type){
            case 'account-info':
                return validateAccountInfoData(data);

            case 'crypto-transfer':
                return validateCryptoTransferData(data);

            case 'contract-call':
                return await validateContractCallData(data);

            case 'contract-deploy':
                return await validateContractDeployData(data);
            
            case 'file-create':
                return await validateFileCreateData(data);
            
            case 'file-retrieve':
                return await validateFileRetrieveData(data);

            case 'topic-create':
                return await validateTopicCreateData(data);
            
            case 'topic-update':
                return await validateTopicUpdateData(data);

            case 'topic-info':
                return await validateTopicInfoData(data);
            
            case 'topic-delete':
                return await validateTopicDeleteData(data);

            case 'submit-message':
                return await validateSubmitMessageData(data);
            
            default:
                throw "No service found!";
                
        }
    }catch(e){
        throw e;
    }
}