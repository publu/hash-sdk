
import {sum} from './sum';
import {selectProvider} from './middleware';
import {setAccount} from './account';
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

// Exposed Functions
const exports = {
  sum,
  selectProvider,
  setAccount,
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
(window as any).hash={...exports};

// Exposing function using default
export default {
  ...exports
};
