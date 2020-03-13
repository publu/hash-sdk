let hash = {};
hash.onSmartContractSuccess = null;
hash.onSmartContractError = null;
hash.onCryptoTransferSuccess = null;
hash.onCryptoTransferError = null;

let _callback = null;

let _resolve = null;
let _reject = null;

let extensionid = '';

window.onload = function () {


    /**
     * Variable that gives id of extension when the composer extension is up and running
     * 
     * @example
     * console.log(extensionid);
     * @returns {string} "igptwehnsjcokfkansilfhgntepvjbojm"
     * 
     */
    const extensionid = extensionId;
    
    window.hash = hash;

    /**
    * Triggers a prompt on website for composer extension connect guide  
    * 
    * @example
    * hash.enable((err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // triggers a prompt window on your website
    * @returns {function} callback
    * 
    * 
    * @param {function} cb
    */
    hash.enable = (cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-connect");
        hederaTag.setAttribute("data-title", document.title || '');
        hederaTag.setAttribute("data-host", window.location.host || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }

    /**
    * Triggers a Cryptotransfer prompt from composer extension  
    * 
    * @example
    * hash.triggerCryptoTransfer(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers cryptotransfer extension prompt
    * @returns {function} callback
    * 
    * @param {object{}} data An object containing 
    * @param {string} data.contractid - contract Id can be of account id type('0.0.1234') or domain name type ('mydomain.hh')
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.extensionid(optional) - extension id of composer
    * @param {string} data.recipientlist- to addresses of recipients as string of object 
    * @param {string} data.contentid(optional) 
    * @param {string} data.type(optional) 
    * @param {string} data.redirect(optional)
    * @param {function} cb
    */
    hash.triggerCryptoTransfer = (data, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-micropayment");
        hederaTag.setAttribute("data-time", data.contractid || '');
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-contentid", data.contentid || '');
        hederaTag.setAttribute("data-type", data.type || '');
        hederaTag.setAttribute("data-redirect", data.redirect || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-recipientlist", data.recipientlist || '');
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }


    /**
    * Triggers a Smart Contract call prompt from composer extension  
    * 
    * @example
    * hash.triggerSmartContract(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers smart contract call extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.contractid - contract Id can be of account id type('0.0.1234') or domain name type ('mydomain.hh')
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.params(optional) - string of Array which contains parameters of contract function to be executed
    * @param {string} data.abi- string array of objects which contains details of contract function   
    * @param {string} data.extensionid(optional) - extension id of composer
    * @param {number} data.gasfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} data.transactionfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} data.amount(optional)
    * @param {function} cb
    */
    hash.triggerSmartContract = (data, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-contract");
        hederaTag.setAttribute("data-contractid", data.contractid || '');
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-params", data.params || '');
        hederaTag.setAttribute("data-abi", data.abi || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-gasfee", data.gasfee || '');
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-amount", data.amount || '');
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }

    /**
    * Triggers a Smart Contract Deploy prompt from composer extension  
    * 
    * @example
    * hash.deploySmartContract(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers smart contract deploy extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.fileid(alternative to bytecode) - id of the file if created already
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.params(optional) - string of Array which contains parameters of contract function to be executed
    * @param {string} data.abi- string array of objects which contains details of contract function 
    * @param {string} data.bytecode(alternative to fileid) - low-level code version of actual file 
    * @param {string} data.extensionid(optional) - extension id of composer
    * @param {number} data.gasfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} data.transactionfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} [data.expirationTime=7890000000] (optional) expiry time of contract in milliseconds
    * @param {number} data.amount(optional)
    * 
    * @param {function} cb
    */
    hash.deploySmartContract = (data, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-deploy-contract");
        hederaTag.setAttribute("data-fileid", data.fileid || '');
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-params", data.params || '');
        hederaTag.setAttribute("data-abi", data.abi || '');
        hederaTag.setAttribute("data-bytecode", data.bytecode || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-gasfee", data.gasfee || '');
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-amount", data.amount || '');
        hederaTag.setAttribute("data-expirationTime", data.expirationTime ||7890000000 );
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }
    
    /**
    * Stores a file and creates a corresponding fileId for the same  
    * 
    * @example
    * hash.triggerFileCreate(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers create file extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.fileContent - contents of the file
    * @param {number} data.fileSize- size of file in bytes
    * @param {string} data.extensionid(optional) - extension id of composer
    * @param {number} data.transactionfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} [data.expirationTime=7890000000] (optional) expiry time of contract in milliseconds
    * @param {function} cb
    */
    hash.triggerFileCreate = (data, cb) => {
        //validation 
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-file-create");
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-fileContent", data.fileContent || '');
        hederaTag.setAttribute("data-fileSize", data.fileSize || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-expirationTime", data.expirationTime ||7890000000 );
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }

    /**
    * Retrieves a file(fileContents) corresponding to a fileId
    * 
    * @example
    * hash.triggerFileRetrieve(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers create file extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.fileid - id of the file, to retrieve the fileContentses
    * @param {number} data.transactionfee - cost of transaction fee(tinybars) needed for call 
    * @param {function} cb
    */
    hash.triggerFileRetrieve = (data, cb) => {
        //validation 
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-file-retrieve");
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-fileId", data.fileId || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }


    /**
    * Create a topic using hedera consensus service
    * 
    * @example
    * hash.triggerTopicCreate(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers create topic extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {number} data.transactionfee(optional) - cost of transaction fee(tinybars) needed for call 
    * @param {string} data.submitKeyList(optional) - list of public keys (stringified array of public keys)
    * @param {number} data.expirationTime (optional) - expiry time in milliseconds
    * @param {number} data.autoRenewPeriod (optional) - auto renew time in milliseconds
    * @param {string} data.autoRenewAccount (optional) - auto renew account in accountId(0.0.1234) like format
    * @param {function} cb
    */
    hash.triggerTopicCreate = (data, cb) => {
        //validation 
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-topic-create");
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-submitkeylist", data.submitKeyList || '');
        hederaTag.setAttribute("data-expirationtime", data.expirationTime || '');
        hederaTag.setAttribute("data-autorenewperiod", data.autoRenewPeriod || '');
        hederaTag.setAttribute("data-autorenewaccount", data.autoRenewAccount || '');

        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }


    /**
    * Update a topic using hedera consensus service
    * 
    * @example
    * hash.triggerTopicUpdate(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers update topic extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.topicId - id of the destination topic in accountId like format (0.0.12345)
    * @param {string} data.memo(optional) - short message specifying the purpose or message relating to the call
    * @param {number} data.transactionfee(optional) - cost of transaction fee(tinybars) needed for call 
    * @param {string} data.submitKeyList(optional) - list of public keys (stringified array of public keys)
    * @param {number} data.expirationTime (optional) - expiry time in milliseconds
    * @param {number} data.autoRenewPeriod (optional) - auto renew time in milliseconds
    * @param {string} data.autoRenewAccount (optional) - auto renew account in accountId(0.0.1234) like format
    * @param {function} cb
    */
   hash.triggerTopicUpdate = (data, cb) => {
    //validation 
    let contractDiv = document.getElementsByTagName('body')[0];
    let hederaTag = document.createElement("hedera-topic-update");
    hederaTag.setAttribute("data-memo", data.memo || ' ');
    hederaTag.setAttribute("data-extensionid", extensionid);
    hederaTag.setAttribute("data-topicid", data.topicId || '');
    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
    hederaTag.setAttribute("data-submitkeylist", data.submitKeyList || '');
    hederaTag.setAttribute("data-expirationtime", data.expirationTime || '');
    hederaTag.setAttribute("data-autorenewperiod", data.autoRenewPeriod || '');
    hederaTag.setAttribute("data-autorenewaccount", data.autoRenewAccount || '');

    contractDiv.appendChild(hederaTag);
    if (cb) {
        _callback = cb;
    } else {
        return new Promise((resolve, reject) => {
            _resolve = resolve;
            _reject = reject;
        })
    }
    }


    /**
    * Get info about a topic using hedera consensus service
    * 
    * @example
    * hash.triggerTopicInfo(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers info topic extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.topicId - id of the destination topic in accountId like format (0.0.12345)
    * @param {number} data.transactionfee(optional) - cost of transaction fee(tinybars) needed for call 
    * @param {string} data.memo(optional) - short message specifying the purpose or message relating to the call
    * @param {function} cb
    */
   hash.triggerTopicInfo = (data, cb) => {
        //validation 
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-topic-info");
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-topicid", data.topicId || '');

        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }


    /**
    * Delete a topic using hedera consensus service
    * 
    * @example
    * hash.triggerTopicDelete(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers info topic extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.topicId - id of the destination topic in accountId like format (0.0.12345)
    * @param {number} data.transactionfee(optional) - cost of transaction fee(tinybars) needed for call 
    * @param {string} data.memo(optional) - short message specifying the purpose or message relating to the call
    * @param {function} cb
    */
   hash.triggerTopicDelete = (data, cb) => {
        //validation 
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-topic-delete");
        hederaTag.setAttribute("data-memo", data.memo || ' ');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-topicid", data.topicId || '');

        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }


    /**
    * Submit a message on a topic that is already created
    * 
    * @example
    * hash.triggerMessageSubmit(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers message submit extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.topicId - id of the destination topic in accountId like format (0.0.12345)
    * @param {string} data.message - message to be submitted
    * @param {number} data.transactionfee(optional) - cost of transaction fee(tinybars) needed for call 
    * @param {function} cb
    */
   hash.triggerMessageSubmit = (data, cb) => {
    //validation 
    let contractDiv = document.getElementsByTagName('body')[0];
    let hederaTag = document.createElement("hedera-message-submit");
    hederaTag.setAttribute("data-memo", data.memo || ' ');
    hederaTag.setAttribute("data-extensionid", extensionid);
    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
    hederaTag.setAttribute("data-topicid", data.topicId || '');
    hederaTag.setAttribute("data-message", data.message || '');

    contractDiv.appendChild(hederaTag);
    if (cb) {
        _callback = cb;
    } else {
        return new Promise((resolve, reject) => {
            _resolve = resolve;
            _reject = reject;
        })
    }
}


    /**
    * Checks balance of current account selected in composer extension or checks the balance of the given account id  
    * 
    * @example
    * hash.triggerCheckBalance("0.0.12345", (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       // {
    *       //   res:{
    *       //           balance:"2363161",
    *       //           currentAccount:"0.0.12345",
    *       //           currentNetwork:"mainnet"
    *       //       }
    *       // }
    *       console.log('Success:::',res);
    *   }
    * });
    * @returns {function} callback
    * 
    * @param {string} accountID account id in accountID format("0.0.12345")
    * @param {function} cb
    */
   hash.triggerCheckBalance = (accountID, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-balance");
        hederaTag.setAttribute("data-accountID", accountID || '');
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }



    /**
    * Converts hexadecimal eth address to account id type('0.0.1234')
    * 
    * @example
    * hash.ethAddressToAccountId("0000000000000000000000000000000000003039);
    * //returns "0.0.12345"
    * 
    * @param {string} ethAddress an hexadecimal value
    *
    */
    hash.ethAddressToAccountId = (ethAddress) => {
        accId = `0.0.${parseInt(ethAddress, 16)}`
        return (accId);
    }

    /**
    * Converts account id type('0.0.1234') to hexadecimal eth address
    * 
    * @example
    * hash.accountIdToEthAddress("0.0.12345");
    * @returns {string} "0000000000000000000000000000000000003039"
    * 
    * @param {string} ethAddress an hexadecimal value
    *
    */
    hash.accountIdToEthAddress = (accountId) => {
        let defaultAddress = '0000000000000000000000000000000000000000';
        let accountNo = accountId.split('.')[2];
        let etherAddressRaw = parseInt(accountNo).toString(16);
        let remainingCount = 40 - etherAddressRaw.length;
        let etherAddress = defaultAddress.substr(0, remainingCount) + etherAddressRaw + defaultAddress.substr(remainingCount + etherAddressRaw.length)
        return etherAddress;
    }


    document.addEventListener('DOMNodeInserted', () => {
        let banner = document.getElementById("hedera-banner-wrapper")
        console.log("Banner:", banner);
        if (banner) {
            let chromeExtensionId = banner.getAttribute('data-id')
            let smartContractTrigger = banner.getAttribute('data-smart-contract-trigger')
            console.log(smartContractTrigger)
            if (smartContractTrigger === 'true') {
                banner.style.display = 'none';
                console.log(`chrome-extension://${chromeExtensionId}/html/smart-contract-details.html?sender_url=${window.location.origin}`)
                let popupWindow = window.open(`chrome-extension://${chromeExtensionId}/html/smart-contract-details.html?sender_url=${window.location.origin}`, "extension_popup", "height=520,width=350,status=1,scrollbars=1,resizable=no");
                console.log('open popup window')
                popupWindow.onbeforeunload = function () {
                    console.log('popupWindow closed..');
                }
                return;
            }
            let microPaymentTrigger = banner.getAttribute('data-crypto-transfer-trigger')
            if (microPaymentTrigger === 'true') {
                banner.style.display = 'none';
                window.open(`chrome-extension://${chromeExtensionId}/html/crypto-transfer-details.html?sender_url=${window.location.origin}`, "extension_popup", "height=520,width=350,status=1,scrollbars=1,resizable=no");
                return;
            }
        }
    });

    window.addEventListener("message", receiveMessage, false);

    
    function receiveMessage(event) {
        if (event.data.type && event.origin === window.location.origin) {
            console.log("receiveMessage::")
            console.log(event.origin);
            console.log(event.data.type);
            console.log(event.data.res);
            switch (event.data.type) {
                case 'account-connect-deny':
                    window.hash.onConnectAccountError && window.hash.onConnectAccountError(event.data.res)
                    _callback && _callback(event.data.res, null)
                    _reject && _reject(event.data.res)
                    break;
                case 'account-connect-success':
                    window.hash.onConnectAccountSuccess && window.hash.onConnectAccountSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'smart-contract-deny':
                    window.hash.onSmartContractError && window.hash.onSmartContractError(event.data.res)
                    _callback && _callback(event.data.res, null)
                    _reject && _reject(event.data.res)
                    break;
                case 'smart-contract-success':
                    window.hash.onSmartContractSuccess && window.hash.onSmartContractSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'micro-payment-deny':
                    window.hash.onCryptoTransferError && window.hash.onCryptoTransferError(event.data.res)
                    _callback && _callback(event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'micro-payment-success':
                    window.hash.onCryptoTransferSuccess && window.hash.onCryptoTransferSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'hedera-balance-success':
                    window.hash.onCheckAccountBalance && window.hash.onCheckAccountBalance(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'hedera-balance-deny':
                    window.hash.onCheckAccountBalance && window.hash.onCheckAccountBalance(event.data.res)
                    _callback && _callback( event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'smart-contract-deploy-success':
                    window.hash.onSmartContractDeploySuccess && window.hash.onSmartContractDeploySuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'smart-contract-deploy-deny':
                    window.hash.onSmartContractDeployError && window.hash.onSmartContractDeployError(event.data.res)
                    _callback && _callback( event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'file-create-success':
                    window.hash.onFileCreateSuccess && window.hash.onFileCreateSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'file-create-deny':
                    window.hash.onFileCreateError && window.hash.onFileCreateError(event.data.res)
                    _callback && _callback( event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'file-retrieve-success':
                    window.hash.onFileRetrieveSuccess && window.hash.onFileRetrieveSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'file-retrieve-deny':
                    window.hash.onFileRetrieveError && window.hash.onFileRetrieveError(event.data.res)
                    _callback && _callback( event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'topic-create-success':
                    window.hash.onTopicCreateSuccess && window.hash.onTopicCreateSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'topic-create-deny':
                    window.hash.onTopicCreateError && window.hash.onTopicCreateError(event.data.res)
                    _callback && _callback(event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'topic-update-success':
                    window.hash.onTopicUpdateSuccess && window.hash.onTopicUpdateSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'topic-update-deny':
                    window.hash.onTopicUpdateError && window.hash.onTopicUpdateError(event.data.res)
                    _callback && _callback(event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'topic-info-success':
                    window.hash.onTopicInfoSuccess && window.hash.onTopicInfoSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'topic-info-deny':
                    window.hash.onTopicInfoError && window.hash.onTopicInfoError(event.data.res)
                    _callback && _callback(event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'topic-delete-success':
                    window.hash.onTopicDeleteSuccess && window.hash.onTopicDeleteSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'topic-delete-deny':
                    window.hash.onTopicDeleteError && window.hash.onTopicDeleteError(event.data.res)
                    _callback && _callback(event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'message-submit-success':
                    window.hash.onMessageCreateSuccess && window.hash.onMessageCreateSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'message-submit-deny':
                    window.hash.onMessageCreateError && window.hash.onMessageCreateError(event.data.res)
                    _callback && _callback(event.data.res)
                    _reject && _reject(event.data.res)
                    break;
            }
        }
    }
}