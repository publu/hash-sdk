
import {sum} from './sum';
import {selectProvider} from './middleware';
import {setAccount} from './account';
import {
  triggerCryptoTransfer,
  triggerSmartContract,
  deploySmartContract
} from './controller';

export default {
  sum,
  selectProvider,
  setAccount,
  triggerCryptoTransfer,
  triggerSmartContract,
  deploySmartContract
}