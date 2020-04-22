
// import {sum} from './sum';
import {
  setProvider as setProviderFn, 
  setProviderUI as setProviderUIFn
} from './middleware';
import {
  setAccount as setAccountFn,
  setAccountUI as setAccountUIFn
} from './account';
import {
  triggerCheckBalance as triggerCheckBalanceFn,
  triggerCryptoTransfer as triggerCryptoTransferFn,
  triggerSmartContract as triggerSmartContractFn,
  deploySmartContract as deploySmartContractFn,
  triggerFileCreate as triggerFileCreateFn,
  triggerFileRetrieve as triggerFileRetrieveFn,
  triggerTopicCreate as triggerTopicCreateFn,
  triggerTopicUpdate as triggerTopicUpdateFn,
  triggerTopicInfo as triggerTopicInfoFn,
  triggerTopicDelete as triggerTopicDeleteFn,
  triggerSubmitMessage as triggerMessageSubmitFn
} from './controller';
import {util} from './utils';

// Exposed Functions
const exportFunctions = {
  // sum,
  setProvider : setProviderFn,
  setProviderUI : setProviderUIFn,
  setAccount : setAccountFn,
  setAccountUI : setAccountUIFn,
  triggerCheckBalance : triggerCheckBalanceFn,
  triggerCryptoTransfer : triggerCryptoTransferFn,
  triggerSmartContract : triggerSmartContractFn,
  deploySmartContract : deploySmartContractFn,
  triggerFileCreate : triggerFileCreateFn,
  triggerFileRetrieve : triggerFileRetrieveFn,
  triggerTopicCreate : triggerTopicCreateFn,
  triggerTopicUpdate : triggerTopicUpdateFn,
  triggerTopicInfo : triggerTopicInfoFn,
  triggerTopicDelete : triggerTopicDeleteFn,
  triggerMessageSubmit : triggerMessageSubmitFn,
};

// Exposing inject to window object
if(util.checkEnvironment()==='server'){
  (global as any).hash={...exportFunctions}
}else{
  (window as any).hash={...exportFunctions}
}

// Exposing function using default
// if(util.checkEnvironment()==='server'){
//   module.exports= exportFunctions
// }

export const setProvider = exportFunctions.setProvider;
export const setProviderUI = exportFunctions.setProviderUI;
export const setAccount = exportFunctions.setAccount;
export const setAccountUI = exportFunctions.setAccountUI;
export const triggerCheckBalance = exportFunctions.triggerCheckBalance;
export const triggerCryptoTransfer = exportFunctions.triggerCryptoTransfer;
export const triggerSmartContract = exportFunctions.triggerSmartContract;
export const deploySmartContract = exportFunctions.deploySmartContract;
export const triggerFileCreate = exportFunctions.triggerFileCreate;
export const triggerFileRetrieve = exportFunctions.triggerFileRetrieve;
export const triggerTopicCreate = exportFunctions.triggerTopicCreate;
export const triggerTopicUpdate = exportFunctions.triggerTopicUpdate;
export const triggerTopicInfo = exportFunctions.triggerTopicInfo;
export const triggerTopicDelete = exportFunctions.triggerTopicDelete;
export const triggerMessageSubmit = exportFunctions.triggerMessageSubmit;
