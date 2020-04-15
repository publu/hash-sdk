
import {sum} from './sum';
import {setProvider,setProviderUI} from './middleware';
import {setAccount,setAccountUI} from './account';
import {
  triggerCheckBalance,
  triggerCryptoTransfer,
  triggerSmartContract,
  deploySmartContract,
  triggerFileCreate,
  triggerFileRetrieve,
  triggerTopicCreate,
  triggerTopicUpdate,
  triggerTopicInfo,
  triggerTopicDelete,
  triggerSubmitMessage
} from './controller';
import {util} from './utils';

// Exposed Functions
const exports = {
  sum,
  setProvider,
  setProviderUI,
  setAccount,
  setAccountUI,
  triggerCheckBalance,
  triggerCryptoTransfer,
  triggerSmartContract,
  deploySmartContract,
  triggerFileCreate,
  triggerFileRetrieve,
  triggerTopicCreate,
  triggerTopicUpdate,
  triggerTopicInfo,
  triggerTopicDelete,
  triggerSubmitMessage,
};

// Exposing inject to window object
if(util.checkEnvironment()==='server'){
  (global as any).hash={...exports}
}else{
  (window as any).hash={...exports}
}

// Exposing function using default
if(util.checkEnvironment()==='server'){
  module.exports= {
    ...exports
  };  
}

export default {
  ...exports
};  

