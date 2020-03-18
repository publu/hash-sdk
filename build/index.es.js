import { ContractFunctionParams, Client, Ed25519PrivateKey, FileCreateTransaction, FileAppendTransaction, ContractCreateTransaction, CryptoTransferTransaction, Status, ContractExecuteTransaction } from '@hashgraph/sdk';
import { SHA3 } from 'sha3';
import BigNumber from 'bignumber.js';
import { AbiCoder } from 'web3-eth-abi';
import forge from 'node-forge';

var sum = function (a, b) { return a + b; };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// import {stylesMain} from '../ui-modules/styles/stylesMain';
var customElementInjector = function (element, targetTag) {
    if (targetTag === void 0) { targetTag = 'body'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var customElement, parentTag;
        return __generator(this, function (_a) {
            customElement = typeof element === 'string' ? document.createElement(element) : element;
            parentTag = document.querySelector(targetTag);
            parentTag && parentTag.appendChild(customElement);
            return [2 /*return*/];
        });
    });
};
var elementDestructor = function (element) {
    var customElementName = typeof element === 'string' ? element : element.tagName.toLowerCase();
    var targetTag = document.querySelector(customElementName);
    targetTag && targetTag.parentNode ? targetTag.parentNode.removeChild(targetTag) : null;
};
var internalStyleDestructor = function (id) {
    var headTag = document.querySelector('head');
    var targetStyleElement = document.querySelector("#" + id);
    targetStyleElement ? headTag === null || headTag === void 0 ? void 0 : headTag.removeChild(targetStyleElement) : null;
};

var Images = {
    hardwareWallet: require('../assets/hardware-wallet.svg'),
    softwareSDKImage: require('../assets/software-sdk.svg'),
    composerLogo: require('../assets/composer-logo.svg')
};

var theme = {
    default: {
        white: 'rgba(255,255,255,1)',
        black: 'rgba(0,0,0,1)',
        // Common
        primaryColor: 'rgb(24, 189, 208)',
        secondaryColor: 'rgb(7,228,183)',
        // Button
        buttonUnImportantColor: 'rgba(0,0,0,0.1)',
        buttonPrimary: 'rgba(81, 197, 255,1)',
        buttonRadius: '7px',
        // Modal 
        modalOverlayColor: 'rgba(0,0,0,0.6)',
        modalRadius: '15px',
        modalZindex: '999'
    }
};

var t = theme['default'];
var cardStyle = "\n    .card-container{\n        padding:18px 12px;\n        font-family:inherit;\n        margin:25px 18px;\n        border-radius:6px;\n        flex:1;\n        display:flex;\n        flex-direction:column;\n        align-items:center;\n        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n        text-align:center;min-width: 100px;\n        transition: all 0.2s ease;\n    }\n\n    .card-container:hover{\n        background:rgb(35, 234, 181);\n        color:" + t.white + ";\n        transform: scale(1.05);\n    }\n\n    middleware-card .card-img{\n        width:60px;\n        height:auto;\n    }\n\n    middleware-card .card-title{\n        margin-top: 8px;\n        font-size: 18px;\n    }\n\n    middleware-card .card-desc{\n        margin-top: 6px;\n        font-size: 12px;\n        color:rgba(0,0,0,0.6);\n        font-style:italic;\n    }\n\n    middleware-card .card-recommended{\n        margin-top: 6px;\n        font-size: 12px;\n        color:rgb(234, 92, 110,0.7);\n    }\n";

var t$1 = theme['default'];
var stylesMain = "\n    .modal-parent{\n        position:fixed;\n        display:flex;\n        font-family:inherit;\n        align-items: center;\n        justify-content:center;\n        width:100%;height:100%;\n        left:0;\n        top:0;\n        overflow:hidden;\n        z-index:" + t$1.modalZindex + ";\n        background:" + t$1.modalOverlayColor + ";\n    }\n\n    middleware-selector .modal-container{\n        position:relative;\n        width:100%;\n        max-width:600px;\n        max-height:800px;\n        margin:15px;\n        background:" + t$1.white + ";\n        border-radius:" + t$1.modalRadius + ";\n    }\n\n    middleware-selector .modal-header{\n        display: flex;\n        justify-content: \n        space-between;\n        background:" + t$1.primaryColor + ";\n        padding: 14px 16px;\n        border-top-left-radius: " + t$1.modalRadius + ";\n        border-top-right-radius: " + t$1.modalRadius + ";\n        color: " + t$1.white + ";\n    }\n\n    middleware-selector .cancel-btn{\n        cursor:pointer;\n        font-size:20px;\n    }\n\n    middleware-selector .modal-body{\n        display:flex;\n        flex-wrap:wrap;\n    }\n\n    middleware-selector .modal-title{\n        font-size:20px;\n    }\n\n    middleware-selector .cancel-button{\n        font-size:20px;\n        cursor:pointer;\n    }\n";

var myCustomElement = 'middleware-selector';
var customElementModalTitle = 'Select a middleware';
var cardData = [
    {
        id: 'option-1',
        title: 'Hardware',
        provider: 'hardware',
        description: 'Ledger Nano (Hardware Wallet)',
        imagePath: Images.hardwareWallet,
        active: false,
        recommended: true
    },
    {
        id: 'option-2',
        title: 'Composer',
        provider: 'composer',
        description: 'Extension based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.composerLogo,
        active: true,
        recommended: true
    },
    {
        id: 'option-3',
        title: 'Software',
        provider: 'software',
        description: 'SDK based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.softwareSDKImage,
        active: true,
        recommended: false
    },
];
var renderMiddlewareSelectorUI = function (cb) {
    try {
        // Element creation.
        var parentDiv = document.createElement(myCustomElement);
        var modalContainer = document.createElement('div');
        var modalHeader = document.createElement('div');
        var modalBody = document.createElement('div');
        var modalFooter = document.createElement('div');
        var cancelButton = document.createElement('span');
        var modalTitle = document.createElement('span');
        // Element Styles
        if (!document.querySelector("#" + myCustomElement + "-style")) {
            var styleTag = document.createElement("style");
            styleTag.id = 'hash-sdk-style';
            styleTag.innerHTML = stylesMain;
            document.getElementsByTagName("head")[0].appendChild(styleTag);
        }
        // Element Identification
        parentDiv.setAttribute('class', 'modal-parent');
        modalContainer.setAttribute('class', 'modal-container');
        modalHeader.setAttribute('class', 'modal-header');
        modalFooter.setAttribute('class', 'modal-footer');
        modalBody.setAttribute('class', 'modal-body');
        modalTitle.setAttribute('class', 'modal-title');
        cancelButton.setAttribute('class', 'cancel-btn');
        // Fetching dynamic variables
        cancelButton.innerHTML = "&#x2715";
        modalTitle.innerHTML = "" + customElementModalTitle;
        renderUICard(cardData, modalBody, function (opt) {
            cb && cb(null, opt);
            removeMiddlewareUI();
        });
        parentDiv.onclick = function (event) {
            if (event && event.target && event.target.tagName && event.target.tagName.toLowerCase() === myCustomElement) {
                removeMiddlewareUI();
            }
        };
        cancelButton.onclick = function () {
            removeMiddlewareUI();
        };
        // Element Merging and Finalization
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(cancelButton);
        modalContainer.appendChild(modalHeader);
        modalContainer.appendChild(modalBody);
        modalContainer.appendChild(modalFooter);
        parentDiv.appendChild(modalContainer);
        customElementInjector(parentDiv);
    }
    catch (e) {
        console.error('Error in renderMiddlewareSelectorUI:::', e);
        cb && cb(e);
    }
};
var renderUICard = function (data, targetElement, cb) {
    if (!document.querySelector('#hash-card-style')) {
        var styleTag = document.createElement("style");
        styleTag.id = 'hash-card-style';
        styleTag.innerHTML = cardStyle;
        document.getElementsByTagName("head")[0].appendChild(styleTag);
    }
    if (Array.isArray(data) && data.length > 0) {
        var _loop_1 = function (d) {
            var cardData_1 = d;
            var newUICard = document.createElement('middleware-card');
            newUICard.id = cardData_1.id;
            newUICard.setAttribute('class', 'card-container');
            newUICard.style.cssText = "" + (cardData_1.active ? 'cursor:pointer;' : 'pointer-events:none;filter: grayscale(1);background: rgba(0,0,0,0.1);');
            //Image
            var cardImg = document.createElement('img');
            cardImg.setAttribute('class', 'card-img');
            cardImg.src = cardData_1.imagePath;
            // Title Text
            var titleTextEle = document.createElement('div');
            titleTextEle.setAttribute('class', 'card-title');
            titleTextEle.innerHTML = cardData_1.title;
            // Description Text
            var desc = document.createElement('div');
            desc.setAttribute('class', 'card-desc');
            desc.innerHTML = cardData_1.description;
            // Recommendation
            var notRecommended = document.createElement('div');
            notRecommended.setAttribute('class', 'card-recommended');
            notRecommended.innerHTML = cardData_1.recommended ? '' : 'Not Recommended';
            newUICard.appendChild(cardImg);
            newUICard.appendChild(titleTextEle);
            newUICard.appendChild(desc);
            newUICard.appendChild(notRecommended);
            newUICard.onclick = function () {
                cb && cb(d);
            };
            targetElement.appendChild(newUICard);
        };
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var d = data_1[_i];
            _loop_1(d);
        }
    }
};
var removeMiddlewareUI = function () {
    internalStyleDestructor('hash-sdk-style');
    internalStyleDestructor('hash-card-style');
    elementDestructor(myCustomElement);
};

var t$2 = theme['default'];
var accountStyle = "\n    .modal-parent{\n        position:fixed;\n        display:flex;\n        font-family:inherit;\n        align-items: center;\n        justify-content:center;\n        width:100%;height:100%;\n        left:0;\n        top:0;\n        overflow:hidden;\n        z-index:" + t$2.modalZindex + ";\n        background:" + t$2.modalOverlayColor + ";\n    }\n\n    account-setter .modal-container{\n        position:relative;\n        width:100%;\n        max-width:600px;\n        max-height:800px;\n        margin:15px;\n        background:" + t$2.white + ";\n        border-radius:" + t$2.modalRadius + ";\n    }\n\n    account-setter .modal-header{\n        display: flex;\n        justify-content: \n        space-between;\n        background:" + t$2.primaryColor + ";\n        padding: 14px 16px;\n        border-top-left-radius: " + t$2.modalRadius + ";\n        border-top-right-radius: " + t$2.modalRadius + ";\n        color: " + t$2.white + ";\n    }\n\n    account-setter .close-btn{\n        cursor:pointer;\n        font-size:20px;\n    }\n\n    account-setter .modal-body{\n        display: flex;\n        justify-content: center;\n    }\n\n    account-setter .modal-body-wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex-wrap:wrap;\n        flex: 1;\n        margin: 15px 20px;\n    }\n\n    account-setter .input-wrapper{\n        width: 100%;\n        margin:10px 0px;\n    }\n\n    account-setter .input-ele{\n        width: calc(100% - 20px);\n        padding:0px 10px;\n        height: 36px;\n        border-radius: 4px;\n        font-size: 14px;\n        background: rgba(255,255,255,1);\n        border: 1px solid rgba(0,0,0,0.2);\n    }\n\n    select.input-ele{\n        width: 100%;\n    }\n\n    account-setter .label-input{\n        font-size: 14px;\n        opacity:0.8;\n    }\n\n    account-setter .modal-title{\n        font-size:20px;\n    }\n\n    account-setter .close-button{\n        font-size:20px;\n        cursor:pointer;\n    }\n\n    account-setter button{\n        border-radius: 5px;\n        border: none;\n        font-size: 15px;\n        padding: 10px 20px;\n        margin:10px;\n        cursor:pointer;\n        opacity:0.8;\n        transition:all 0.2s ease;\n    }\n\n    account-setter button:hover{\n        opacity:1;\n        transform:scale(1.02);\n    }\n\n    account-setter .modal-footer{\n        display:flex;\n        justify-content:center;\n    }\n\n    .cancel-btn{\n        background: rgba(0,0,0,0.05);\n    }\n\n    .confirm-btn{\n        background: " + t$2.secondaryColor + ";\n    }\n";

var myCustomElement$1 = 'account-setter';
var customElementModalTitle$1 = 'Set account';
var networks = [
    {
        id: "n1",
        title: 'Test Network',
        value: 'testnet'
    },
    {
        id: "n2",
        title: 'Main Network',
        value: 'mainnet'
    }
];
var renderAccountSetterUI = function (cb) {
    try {
        // Element creation.
        var parentDiv = document.createElement(myCustomElement$1);
        var modalContainer = document.createElement('div');
        var modalHeader = document.createElement('div');
        var modalBody = document.createElement('div');
        var modalBodyWrapper = document.createElement('div');
        var modalFooter = document.createElement('div');
        var closeButton = document.createElement('span');
        var modalTitle = document.createElement('span');
        var networkInput_1 = document.createElement('select');
        var accountIdInput_1 = document.createElement('input');
        var privateInput_1 = document.createElement('input');
        var confirmButton = document.createElement('button');
        var cancelButton = document.createElement('button');
        // Element Styles
        if (!document.querySelector("#" + myCustomElement$1 + "-style")) {
            var styleTag = document.createElement("style");
            styleTag.id = 'hash-sdk-style';
            styleTag.innerHTML = accountStyle;
            document.getElementsByTagName("head")[0].appendChild(styleTag);
        }
        // Element Identification
        parentDiv.setAttribute('class', 'modal-parent');
        modalContainer.setAttribute('class', 'modal-container');
        modalHeader.setAttribute('class', 'modal-header');
        modalFooter.setAttribute('class', 'modal-footer');
        modalBody.setAttribute('class', 'modal-body');
        modalBodyWrapper.setAttribute('class', 'modal-body-wrapper');
        modalTitle.setAttribute('class', 'modal-title');
        closeButton.setAttribute('class', 'close-btn');
        cancelButton.setAttribute('class', 'cancel-btn');
        confirmButton.setAttribute('class', 'confirm-btn');
        networkInput_1.setAttribute('class', 'network-input');
        accountIdInput_1.setAttribute('class', 'account-input');
        privateInput_1.setAttribute('class', 'account-input');
        // Fetching dynamic variables
        closeButton.innerHTML = "&#x2715";
        accountIdInput_1.placeholder = ' 0.0.1234(Account Id)';
        privateInput_1.placeholder = ' Private Key';
        modalTitle.innerHTML = "" + customElementModalTitle$1;
        cancelButton.innerHTML = 'CANCEL';
        confirmButton.innerHTML = 'VALIDATE & SET';
        networks.forEach(function (n, i) {
            if (i === 0) {
                var option_1 = document.createElement('option');
                option_1.setAttribute('key', i.toString());
                option_1.innerHTML = 'Choose Network';
                option_1.selected = true;
                option_1.disabled = true;
                networkInput_1.appendChild(option_1);
            }
            var option = document.createElement('option');
            option.setAttribute('key', (i + 1).toString());
            option.innerHTML = n.title;
            option.value = n.value;
            networkInput_1.appendChild(option);
        });
        renderLabeledWrappedUI('Network', networkInput_1, modalBodyWrapper);
        renderLabeledWrappedUI('Account Id', accountIdInput_1, modalBodyWrapper);
        renderLabeledWrappedUI('Private Key', privateInput_1, modalBodyWrapper);
        parentDiv.onclick = function (event) {
            if (event && event.target && event.target.tagName && event.target.tagName.toLowerCase() === myCustomElement$1) {
                removeAccountSetterUI();
            }
        };
        closeButton.onclick = function () {
            removeAccountSetterUI();
        };
        cancelButton.onclick = function () {
            removeAccountSetterUI();
        };
        confirmButton.onclick = function () {
            var accountData = {
                accountId: accountIdInput_1.value,
                network: networkInput_1.value,
                keys: {
                    privateKey: privateInput_1.value
                },
                mnemonics: ''
            };
            handleSetAccount(accountData);
        };
        // Element Merging and Finalization
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);
        modalContainer.appendChild(modalHeader);
        modalBody.appendChild(modalBodyWrapper);
        modalContainer.appendChild(modalBody);
        modalFooter.appendChild(cancelButton);
        modalFooter.appendChild(confirmButton);
        modalContainer.appendChild(modalFooter);
        parentDiv.appendChild(modalContainer);
        customElementInjector(parentDiv);
    }
    catch (e) {
        console.error('Error in renderMiddlewareSelectorUI:::', e);
        cb && cb(e);
    }
};
var renderLabeledWrappedUI = function (labelText, inputElement, targetElement) {
    var inputWrapper = document.createElement('div');
    var label = document.createElement('div');
    inputWrapper.setAttribute('class', 'input-wrapper');
    label.setAttribute('class', 'label-input');
    label.innerHTML = labelText;
    inputElement.setAttribute('class', 'input-ele');
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(inputElement);
    targetElement.appendChild(inputWrapper);
};
var removeAccountSetterUI = function () {
    internalStyleDestructor('hash-sdk-style');
    elementDestructor(myCustomElement$1);
};
var handleSetAccount = function (accountData) {
    window.HashAccount = accountData;
    removeAccountSetterUI();
};

// interface IKeys{
//     privateKey:string,
//     publicKey?:string,
//     mnemonics?:string
// }
var setAccount = function (cb) {
    return new Promise(function (resolve, reject) {
        renderAccountSetterUI(function (err, res) {
            // setMiddleware(res.provider);
            cb && cb(err, res);
            err ? reject(err) : resolve(res);
        });
    });
};

var selectProvider = function (cb) {
    return new Promise(function (resolve, reject) {
        renderMiddlewareSelectorUI(function (err, res) {
            setProvider(res.provider);
            if ((window).provider === 'software' && !(window).HashAccount) {
                setAccount();
            }
            else {
                cb && cb(err, res);
                err ? reject(err) : resolve(res);
            }
        });
    });
};
var setProvider = function (provider) {
    (window).provider = provider;
};

/**
 * Validates if given value is of type string
 * @param {any} s refers to value passed by function caller
 * @returns {string | Boolean} returns string if true and false respectively
 */
var isString = function (s) { return typeof s === 'string' ? s : false; };
/**
 * Validates if given value is of type number
 * @param {any} n refers to value passed by function caller
 * @returns {number | Boolean} returns number if true and false respectively
 */
var isNumber = function (n) { return !isNaN(Number(n)) ? Number(n) : false; };
/**
 * Validates if given value is accountId address(0x.. or 0000.. [hex])
 * @param {any} id refers to value passed by function caller
 * @returns {Boolean} returns account id  of type string if true and false respectively
 */
var isAccountIdAddress = function (id) {
    // check if it has the basic requirements of an address
    if (!/^(0x)?[0-9a-f]{40}$/i.test(id)) {
        return false;
        // If it's ALL lowercase or ALL upppercase
    }
    else if (/^(0x|0X)?[0-9a-f]{40}$/.test(id) || /^(0x|0X)?[0-9A-F]{40}$/.test(id)) {
        return true;
        // Otherwise check each case
    }
    else {
        return checkAddressChecksum(id);
    }
};
/**
 * Validates if given value is accountId address(0x.. or 0000.. [hex])
 * @param {any} id refers to value passed by function caller
 * @returns {Boolean} returns validation
 */
var checkAddressChecksum = function (address) {
    // Check each case
    // address = address.replace(/^0x/i, '');
    var addressHash = new SHA3().update(address.toLowerCase().replace(/^0x/i, '')).digest("hex"); //SHA3Hash(address.toLowerCase()).replace(/^0x/i, '');
    for (var i = 0; i < 40; i++) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
};
/**
 * Validates if given value is accountIdlike(0.0.12345)
 * @param {any} id refers to value passed by function caller
 * @returns {string | Boolean} returns account id  of type string if true and false respectively
 */
var isAccountIdLike = function (id) { return id && typeof id === 'string' && id.split('.').length === 3 && !isNaN(Number(id.split('.')[0])) && !isNaN(Number(id.split('.')[1])) && !isNaN(Number(id.split('.')[2])) ? id : false; };
/**
 * Validates if given value is account Object{shard:0,realm:0,contract|account|file|topic:1234}
 * @param {any} id refers to value passed by function caller
 * @returns {Object | Boolean} returns account id  of type object if true and false respectively
 */
var isAccountIdObject = function (id) { return id && typeof id === 'object' && id.shard && id.realm && (id.account || id.file || id.contract || id.topic) ? id : false; };
/**
 * Validates if given value is hedera id of type account Id and account Object
 * @param {any} id refers to value passed by function caller
 * @returns {string | Boolean} returns account id  of type string if true and false respectively
 */
var isHederaId = function (id) { return id && typeof id === 'string' && id.split('.').length === 3 ? id : typeof id === 'object' && id.shard && id.realm && (id.account || id.file || id.contract || id.topic) ? id : false; };
/**
 * Validates if given value is an array
 * @param {string[] | Array<string>} arr refers to value passed by function caller
 * @returns {Array | Boolean} returns array or false respectively
 */
var validateArrayList = function (arr) {
    try {
        if (arr && Array.isArray(arr) && arr.length > 0) {
            return arr;
        }
        else if (JSON.parse(arr)) {
            return JSON.parse(arr);
        }
        else {
            return false;
        }
    }
    catch (e) {
        return false;
    }
};
/**
 * Validates if array has list of account addresses
 * @param {Array} addArr refers to value passed by function caller
 * @returns {Array | Boolean} returns array or false respectively
 */
var isAddressArray = function (addArr) {
    var newArray = [];
    if (Array.isArray(addArr) && addArr.length > 0) {
        addArr.forEach(function (a) {
            a = util.accountIdToHexAddress(a);
            if (!isAccountIdAddress(a)) {
                return false;
            }
            newArray.push(a);
        });
        return newArray;
    }
    else {
        return false;
    }
};
/**
 * Validates recipient List
 * @param {string[] | Array<string>} recipientList refers to value passed by function caller
 * @returns {Array | Boolean} returns recipient list or false if invalid
*/
var validateRecipientList = function (recipientList) {
    recipientList = validateArrayList(recipientList);
    if (recipientList === false) {
        return false;
    }
    var requestedPayment = 0;
    for (var k in recipientList) {
        requestedPayment += parseInt(recipientList[k].tinybars);
        try {
            common.isAccountIdLike(recipientList[k].to);
        }
        catch (e) {
            return false;
        }
    }
    if (isNaN(requestedPayment)) {
        return false;
    }
    return recipientList;
};
var common = {
    isString: isString,
    isNumber: isNumber,
    isAccountIdLike: isAccountIdLike,
    isHederaId: isHederaId,
    validateArrayList: validateArrayList,
    validateRecipientList: validateRecipientList,
    isAccountIdObject: isAccountIdObject,
    isAccountIdAddress: isAccountIdAddress,
    isAddressArray: isAddressArray
};

/**
 * Converts any string to bytes[]
 * @param {string} s refers to value passed by function caller
 * @returns {Uint8Array} returns unit8 array bytes[]
 */
var stringToBytes = function (s) {
    var arrayBuffer = new ArrayBuffer(s.length * 1);
    var newUint = new Uint8Array(arrayBuffer);
    newUint.forEach(function (_, i) {
        newUint[i] = s.charCodeAt(i);
    });
    return newUint;
};
/**
 * Gives the bytes size of a given string
 * @param {string} s refers to value passed by function caller
 * @returns {number} returns size in bytes
 */
var stringToBytesSize = function (s) {
    if (s) {
        s = s.toString();
        // returns the byte length of an utf8 string
        var size = s.length;
        for (var i = s.length - 1; i >= 0; i--) {
            var code = s.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff)
                size++;
            else if (code > 0x7ff && code <= 0xffff)
                size += 2;
            if (code >= 0xDC00 && code <= 0xDFFF)
                i--; //trail surrogate
        }
        return size;
    }
    else {
        return 0;
    }
};
/**
 * Copies bytes from given range
 * @param {string} start refers to start of copying range
 * @param {string} length refers to size copying range
 * @param {Uint8Array} bytes refers to original bytes
 * @returns {number} returns copied bytes
 */
var copyBytes = function (start, length, bytes) {
    var newUint = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
        newUint[i] = bytes[start + i];
    }
    return newUint;
};
/**
 * Gives the account id object
 * @param {string} id refers to value passed by function caller
 * @param {type} type refers to type of account id(account, contract,file,topic)
 * @returns {Object} returns account id object
 */
var getAccountIdLikeToObj = function (id, type) {
    var _a;
    if (type === void 0) { type = 'account'; }
    var idArr = id.split('.');
    return _a = { shard: Number(idArr[0]), realm: Number(idArr[1]) }, _a[type] = Number(idArr[2]), _a;
};
/**
 * Gives the account id like string
 * @param {Object} id refers to value passed by function caller
 * @returns {string} returns account id string
 */
var getAccountObjToIdLike = function (id) {
    var values = Object.keys(id);
    return values[0] + "." + values[1] + "." + values[2] + ".";
};
/**
 * Gives the full account id Object that contains all types of id format
 * @param {string|Object|number} id refers to value passed by function caller
 * @returns {Object} returns object with different id types
 */
var getAccountIdObjectFull = function (id, type) {
    if (type === void 0) { type = 'account'; }
    id = common.isHederaId(id);
    var accountObj = {
        accountIdLike: '',
        accountIdObject: {}
    };
    if (!id) {
        return id;
    }
    if (common.isAccountIdLike(id)) {
        accountObj.accountIdLike = id.toString();
        accountObj.accountIdObject = getAccountIdLikeToObj(id.toString(), type);
        return accountObj;
    }
    else if (common.isAccountIdObject(id)) {
        accountObj.accountIdLike = getAccountObjToIdLike(id);
        accountObj.accountIdObject = id;
        return accountObj;
    }
    else {
        return id;
    }
};
/**
 * Gives a string of the error
 * @param {any} e refers to error value passed by function caller
 * @returns {Object} returns error string
 */
var getFriendlyErrorObject = function (e) {
    var errorString = typeof e === 'string' ? e : typeof e.message === 'string' ? e.message : typeof e.msg === 'string' ? e.msg : 'Sorry, Something went wrong!';
    return {
        errorString: errorString,
        error: e
    };
};
/**
 * Add up the amount in recipient list
 * @param {Array} recipientList
 * @returns {any} returns hedera client
 */
var sumFromRecipientList = function (recipientList) {
    //@TODO REctify the function
    // recipientList must always exist
    if (recipientList === undefined || recipientList.length === 0) {
        // undefined is only returned when there recipientList is invalid
        return 0;
    }
    var requestedPayment = 0;
    for (var k in recipientList) {
        requestedPayment += parseInt(recipientList[k].tinybars);
    }
    return requestedPayment;
};
/**
 * Checks if provider is set globally
 * @returns {any} returns boolean
 */
var isProviderSet = function () {
    return (window).provider ? (window).provider : false;
};
/**
 * Checks string is Array
 * @returns {any} returns string[] or string
 */
var convertIfArray = function (value) {
    try {
        if (value && typeof value === "string" && (/^[\],:{}\s]*$/.test(value.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, '')))) {
            if (common.validateArrayList(value)) {
                return JSON.parse(value);
            }
            else {
                return value;
            }
        }
        else {
            return value;
        }
    }
    catch (e) {
        throw Error('Invalid Array[]');
    }
};
/**
 * Normalizes values of array
 * @param {string[] | Array<string>} arr refers to value passed by function caller
 * @returns {Array | Boolean} returns recipient list or false if invalid
*/
var normalizeArrayValues = function (arr) {
    if (arr && Array.isArray(arr) && arr.length > 0) {
        return arr.map(function (a) { return convertIfArray(a); });
    }
    return arr;
};
/**
 * Boolean creator
 * @param {any} val refers to value passed by function caller
 * @returns {Boolean} returns Boolean
*/
var getBool = function (val) {
    return Boolean(!!JSON.parse(String(val).toLowerCase()));
};
/**
 * BigNumber convertor
 * @param {number} n refers to value passed by function caller
 * @returns {Boolean} returns BigNumber
*/
var toBigNumber = function (n) {
    n = typeof n !== 'number' ? Number(n) : n;
    return new BigNumber(n);
};
/**
 * AccountId to Hexadecimal address convertor
 * @param {string} accountId refers to value passed by function caller
 * @returns {Boolean} returns hexAddress
*/
var accountIdToHexAddress = function (accountId) {
    var defaultAddress = '0000000000000000000000000000000000000000';
    var accountNo = accountId.split('.')[2];
    var hexAddressRaw = parseInt(accountNo).toString(16);
    var remainingCount = 40 - hexAddressRaw.length;
    var hexAddress = defaultAddress.substr(0, remainingCount) + hexAddressRaw + defaultAddress.substr(remainingCount + hexAddressRaw.length);
    return hexAddress;
};
/**
 * Creates a String Array
 * @param {Array} arr refers to value passed by function caller
 * @returns {Array<string>} returns String array
*/
var createStringArray = function (arr) {
    arr = Array.isArray(arr) ? arr : JSON.parse(arr);
    arr = arr.map(function (s) {
        return s.toString();
    });
    return arr;
};
/**
 * Creates a Number Array
 * @param {Array} arr refers to value passed by function caller
 * @returns {Array<string>} returns Array of Numbers
*/
var createNumberArray = function (arr) {
    var newArr = [];
    arr.forEach(function (n) {
        n = Number(n);
        if (!isNaN(n)) {
            newArr.push(n);
        }
        else {
            return false;
        }
    });
    return newArr;
};
/**
 * Creates a BigNumber Array
 * @param {Array} arr refers to value passed by function caller
 * @returns {Array<string>} returns Array of BigNumbers
*/
var createBigNumberArray = function (arr) {
    var newArr = [];
    arr.forEach(function (n) {
        n = toBigNumber(n);
        if (!isNaN(n)) {
            newArr.push(n);
        }
        else {
            return false;
        }
    });
    return newArr;
};
/**
 * Creates hexadecimal to Decimal
 * @param {string} hexString refers to value passed by function caller
 * @returns {Array<string>} returns decimal value
*/
var hexToDecimal = function (hexString) {
    return parseInt(hexString, 16);
};
/**
 * Creates hexadecimal to AccountId
 * @param {string} hexString refers to value passed by function caller
 * @returns {Array<string>} returns account Id format (0.0.12345)
*/
var hexToAccountID = function (hexString) {
    var value = hexToDecimal(hexString);
    return "0.0." + value;
};
/**
 * Converts hexadecimal to String
 * @param {string} hex refers to value passed by function caller
 * @returns {Array<string>} returns string
*/
var hexToString = function (hex) {
    var str = '';
    for (var n = 2; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
};
/**
 * Extracts constructor from abi
 * @param {Array} abi refers to value passed by function caller
 * @returns {Array<string>} returns string
*/
var getConstructorFromAbi = function (abi) {
    abi.forEach(function (abiObj) {
        if (abiObj.type === "constructor") {
            return abiObj;
        }
    });
};
var util = {
    stringToBytes: stringToBytes,
    stringToBytesSize: stringToBytesSize,
    getAccountIdObjectFull: getAccountIdObjectFull,
    getAccountIdLikeToObj: getAccountIdLikeToObj,
    getAccountObjToIdLike: getAccountObjToIdLike,
    getFriendlyErrorObject: getFriendlyErrorObject,
    sumFromRecipientList: sumFromRecipientList,
    isProviderSet: isProviderSet,
    normalizeArrayValues: normalizeArrayValues,
    convertIfArray: convertIfArray,
    getBool: getBool,
    toBigNumber: toBigNumber,
    accountIdToHexAddress: accountIdToHexAddress,
    createStringArray: createStringArray,
    createNumberArray: createNumberArray,
    createBigNumberArray: createBigNumberArray,
    hexToAccountID: hexToAccountID,
    hexToDecimal: hexToDecimal,
    hexToString: hexToString,
    getConstructorFromAbi: getConstructorFromAbi,
    copyBytes: copyBytes
};

/**
 * Merges abi and params to return hedera compatible data
 * @param {Array} abi refers to abi array value passed by caller
 * @param {Array} params refers to params aarray value passed by caller
 * @returns {any} returns functionParams
*/
var getContractFunctionParams = function (abi, params) {
    // Function params instance
    var functionParams = new ContractFunctionParams();
    if (abi && abi.inputs && abi.inputs.length > 0) {
        try {
            abi.inputs.forEach(function (data, index) {
                if (common.isString(data.type)) {
                    var value = params[index].toString();
                    if (value) {
                        if (common.isString(value)) {
                            functionParams.addString(value);
                        }
                        else {
                            throw Error('Input is not string');
                        }
                    }
                    else {
                        throw Error('Input string can not be empty');
                    }
                }
                else if (data.type == "bool") {
                    if (params[index] === true || params[index] === false) {
                        functionParams.addBool(params[index]);
                    }
                    else if (params[index] == "true" || params[index] == "false") {
                        var value = util.getBool(params[index]);
                        if (typeof value === 'boolean') {
                            functionParams.addBool(value);
                        }
                        else {
                            throw Error('Input is not boolean(true/false)');
                        }
                        ;
                    }
                    else {
                        throw Error('Input boolean can not be empty');
                    }
                }
                else if (data.type == "int32") {
                    var value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addInt32(value);
                    }
                    else {
                        throw Error('Input is not a valid Int32 number');
                    }
                    ;
                }
                else if (data.type == "int64") {
                    var value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addInt64(util.toBigNumber(params[index]));
                    }
                    else {
                        throw Error('Input is not a valid Int64 number');
                    }
                    ;
                }
                else if (data.type == "int256") {
                    var value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addInt256(util.toBigNumber(params[index]));
                    }
                    else {
                        throw Error('Input is not a valid Int256 number');
                    }
                    ;
                }
                else if (data.type == "uint32") {
                    var value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addUint32(value);
                    }
                    else {
                        throw Error('Input is not a valid Uint32 number');
                    }
                    ;
                }
                else if (data.type == "uint64") {
                    var value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addUint64(util.toBigNumber(params[index]));
                    }
                    else {
                        throw Error('Input is not a valid Uint64 number');
                    }
                    ;
                }
                else if (data.type == "uint256") {
                    var value = Number(params[index]);
                    if (common.isNumber(value)) {
                        functionParams.addUint256(util.toBigNumber(params[index]));
                    }
                    else {
                        throw Error('Input is not a valid uint256 number');
                    }
                    ;
                }
                else if (data.type === "address") {
                    var value = util.accountIdToHexAddress(params[index].toString());
                    if (common.isAccountIdAddress(value)) {
                        functionParams.addAddress(value);
                    }
                    else {
                        throw Error('Input is not a valid address(string)');
                    }
                    ;
                }
                else if (data.type == "string[]") {
                    var value = params[index];
                    if (Array.isArray(value)) {
                        value = util.createStringArray(value);
                        functionParams.addStringArray(value);
                    }
                    else {
                        throw Error('Input is not a valid string array');
                    }
                    ;
                }
                else if (data.type == "int32[]") {
                    var value = Array.isArray(params[index]) ? util.createNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addInt32Array(value);
                    }
                    else {
                        throw Error('Input is not a valid int32(number) array');
                    }
                    ;
                }
                else if (data.type == "int64[]") {
                    var value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addInt64Array(value);
                    }
                    else {
                        throw Error('Input is not a valid int64(number) array');
                    }
                    ;
                }
                else if (data.type == "int256[]") {
                    var value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addInt256Array(value);
                    }
                    else {
                        throw Error('Input is not a valid int256(number) array');
                    }
                    ;
                }
                else if (data.type == "uint32[]") {
                    var value = Array.isArray(params[index]) ? util.createNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addUint32Array(value);
                    }
                    else {
                        throw Error('Input is not a valid int32(number) array');
                    }
                    ;
                }
                else if (data.type == "uint64[]") {
                    var value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addUint64Array(value);
                    }
                    else {
                        throw Error('Input is not a valid int64(number) array');
                    }
                    ;
                }
                else if (data.type == "uint256[]") {
                    var value = Array.isArray(params[index]) ? util.createBigNumberArray(params[index]) : false;
                    if (value) {
                        functionParams.addUint256Array(value);
                    }
                    else {
                        throw Error('Input is not a valid int256(number) array');
                    }
                    ;
                }
                else if (data.type == "address[]") {
                    var value = common.isAddressArray(params[index]);
                    if (value) {
                        functionParams.addAddressArray(value);
                    }
                    else {
                        throw Error('Input is not a valid address(string) array');
                    }
                    ;
                }
                else if (data.type == "bytes") {
                    var value = params[index];
                    if (value) {
                        functionParams.addBytes(value.toString());
                    }
                    else {
                        throw Error('Input can not be empty bytes');
                    }
                }
                else if (data.type == "bytes[]") {
                    var value = params[index];
                    if (Array.isArray(value)) {
                        functionParams.addBytesArray(value);
                    }
                    else {
                        throw Error('Input is not a valid bytes array');
                    }
                    ;
                }
            });
            return functionParams;
        }
        catch (e) {
            throw Error(e.message || "Error while creating ContractFunctionParams");
        }
    }
    else {
        return functionParams;
    }
};
/**
 * Create a valid hedera client
 * @param {Object} operator
 * @param {Object} network
 * @returns {any} returns hedera client
 */
var createHederaClient = function (operator, network) {
    var currentNetwork = network;
    var client;
    if (currentNetwork == 'testnet') {
        client = new Client({
            operator: operator
        });
    }
    else {
        client = new Client({
            network: {
                "https://proxy.hashingsystems.com": { shard: 0, realm: 0, account: 3 }
            },
            operator: operator
        });
    }
    return client;
};
/**
 * Create a valid hedera Operator
 * @param {Object} account
 * @param {string} privateKey
 * @returns {any} returns hedera client operator
 */
var createClientOperator = function (account, privatekey) {
    var privateKey = Ed25519PrivateKey.fromString(privatekey);
    return {
        account: account,
        privateKey: privateKey
    };
};
/**
 * Create a hedera file
 * @param {Client} client
 * @param {Object} firstPartBytes
 * @param {Date}  expirationTime
 * @param {number} txFee
 * @param {string} memo
 * @returns {any} returns receipt
 */
var createFile = function (client, firstPartBytes, expirationTime, txFee, memo) { return __awaiter(void 0, void 0, void 0, function () {
    var transactionId, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new FileCreateTransaction()
                    .setContents(firstPartBytes)
                    .setExpirationTime(expirationTime)
                    .addKey(client._getOperatorKey())
                    .setTransactionMemo(memo)
                    .setMaxTransactionFee(txFee)
                    .execute(client)];
            case 1:
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getReceipt(client)];
            case 2:
                response = _a.sent();
                return [2 /*return*/, __assign({}, response)];
        }
    });
}); };
/**
 * Appends file content to an already created hedera file
 * @param {Client} client
 * @param {Object} fileId
 * @param {string} contents
 * @param {number} txFee
 * @returns {any} returns receipt
 */
var appendFile = function (client, fileId, contents, txFee) { return __awaiter(void 0, void 0, void 0, function () {
    var transactionId, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new FileAppendTransaction()
                    .setFileId(fileId)
                    .setContents(contents)
                    .setMaxTransactionFee(txFee)
                    .execute(client)];
            case 1:
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getReceipt(client)];
            case 2:
                response = _a.sent();
                return [2 /*return*/, __assign({}, response)];
        }
    });
}); };
/**
 * Creates Contract transaction with fileId
 * @param {Client} client
 * @param {Object} fileId
 * @param {any} constructorParams
 * @param {number} amount
 * @param {number} gasFee
 * @param {number} txFee
 * @param {string} memo
 * @param {Date} autoRenewPeriod
 * @returns {any} returns receipt
 */
var createContractTx = function (client, fileId, constructorParams, amount, gasFee, txFee, memo, autoRenewPeriod) {
    if (amount === void 0) { amount = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        var transactionId, receipt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new ContractCreateTransaction()
                        .setBytecodeFileId(fileId)
                        .setGas(gasFee)
                        .setAutoRenewPeriod(autoRenewPeriod)
                        .setAdminKey(client._getOperatorKey())
                        .setConstructorParams(constructorParams)
                        .setInitialBalance(amount)
                        .setTransactionMemo(memo)
                        .setMaxTransactionFee(txFee)
                        .execute(client)];
                case 1:
                    transactionId = _a.sent();
                    return [4 /*yield*/, transactionId.getReceipt(client)];
                case 2:
                    receipt = _a.sent();
                    return [2 /*return*/, {
                            receipt: __assign({}, receipt),
                            transactionId: transactionId
                        }];
            }
        });
    });
};
var helper = {
    createClientOperator: createClientOperator,
    createHederaClient: createHederaClient,
    getContractFunctionParams: getContractFunctionParams,
    createFile: createFile,
    appendFile: appendFile,
    createContractTx: createContractTx
};

/**
 * A function to handle crypto transfer based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var cryptoTransferController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, recipientList, memo, _a, accountData, account, fromAccount, amount, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = (window).provider;
                    recipientList = data.recipientList, memo = data.memo;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for crypto comming soon!";
                case 2:
                    accountData = (window.HashAccount);
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    fromAccount = {};
                    fromAccount.acc = accountData.accountId.split('.')[2];
                    fromAccount.privateKey = accountData.privateKey;
                    amount = util.sumFromRecipientList(recipientList);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    updatedData = {
                        amount: amount,
                        memo: memo,
                        account: account,
                        client: client,
                        toAccount: util.getAccountIdLikeToObj(recipientList[0].to),
                    };
                    return [4 /*yield*/, cryptoTransfer(updatedData)];
                case 3:
                    response = _b.sent();
                    console.log('RESPONSE CRYPTO INTERNAL::', response);
                    message = { res: response, type: 'success' };
                    window.postMessage(message, window.location.origin);
                    resolve(response);
                    return [3 /*break*/, 5];
                case 4:
                    extensionid = window.extensionId;
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-micropayment");
                    hederaTag.setAttribute("data-time", '');
                    hederaTag.setAttribute("data-memo", memo || ' ');
                    hederaTag.setAttribute("data-contentid", '');
                    hederaTag.setAttribute("data-type", '');
                    hederaTag.setAttribute("data-redirect", '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-recipientlist", JSON.stringify(recipientList) || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    window.postMessage(message, window.location.origin);
                    reject(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var cryptoTransfer = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var transactionId, receipt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new CryptoTransferTransaction()
                    .addSender(data.account.accountIdObject, data.amount)
                    .addRecipient(data.toAccount, data.amount)
                    .setTransactionMemo(data.memo)
                    //.setTransactionFee(1000000)
                    .execute(data.client)];
            case 1:
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getReceipt(data.client)];
            case 2:
                receipt = _a.sent();
                return [2 /*return*/, ({
                        nodePrecheckcode: receipt.status.code,
                        receiptStatus: receipt.status.code,
                        transactionId: transactionId
                    })];
        }
    });
}); };

/**
 * A function to handle contract call based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var contractCallController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, memo, transactionfee, amount, gasfee, contractId, functionParams, abi, _a, accountData, account, contractIdLike, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = (window).provider;
                    memo = data.memo, transactionfee = data.transactionfee, amount = data.amount, gasfee = data.gasfee, contractId = data.contractId, functionParams = data.functionParams, abi = data.abi;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for contract call comming soon!";
                case 2:
                    accountData = (window.HashAccount);
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    contractIdLike = util.getAccountIdLikeToObj(contractId, 'contract');
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    updatedData = {
                        abi: abi,
                        amount: amount,
                        memo: memo,
                        account: account,
                        client: client,
                        contractId: contractIdLike,
                        functionParams: functionParams,
                        transactionfee: transactionfee,
                        gasfee: gasfee
                    };
                    return [4 /*yield*/, contractCall(updatedData)];
                case 3:
                    response = _b.sent();
                    console.log('RESPONSE CONTRACT CALL SDK::', response);
                    message = { res: response, type: 'success' };
                    window.postMessage(message, window.location.origin);
                    resolve(response);
                    return [3 /*break*/, 5];
                case 4:
                    console.log('DATA:::', data);
                    extensionid = window.extensionId;
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-contract");
                    hederaTag.setAttribute("data-contractid", data.contractId || '');
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-params", JSON.stringify(data.params) || '');
                    hederaTag.setAttribute("data-abi", JSON.stringify(data.abi) || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-gasfee", data.gasfee || '');
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-amount", data.amount || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    window.postMessage(message, window.location.origin);
                    reject(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var contractCall = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, contractId, transactionfee, amount, gasfee, abi, client, functionParams, transactionId, contractCallRecord, finalResult, abiCoder, result_1, resultArray_1, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                memo = data.memo, contractId = data.contractId, transactionfee = data.transactionfee, amount = data.amount, gasfee = data.gasfee, abi = data.abi, client = data.client, functionParams = data.functionParams;
                console.log('DATA IN CALL', data);
                return [4 /*yield*/, new ContractExecuteTransaction()
                        .setContractId(contractId)
                        .setFunction(abi[0].name, functionParams)
                        .setMaxTransactionFee(parseInt(transactionfee))
                        .setGas(gasfee)
                        .setTransactionMemo(memo)
                        .setPayableAmount(amount)
                        .execute(client)];
            case 1:
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getRecord(client)];
            case 2:
                contractCallRecord = _a.sent();
                if (contractCallRecord && contractCallRecord.receipt && contractCallRecord.receipt.status.code == Status.Success.code) {
                    finalResult = {
                        status: "success",
                        ok: true,
                        code: 200,
                        message: "",
                        result: []
                    };
                    if (abi[0].outputs && abi[0].outputs.length > 0 && contractCallRecord.getContractExecuteResult() && contractCallRecord.getContractExecuteResult().asBytes().length > 0) {
                        abiCoder = new AbiCoder();
                        result_1 = abiCoder.decodeParameters(abi[0].outputs, '0x' + forge.util.bytesToHex(contractCallRecord.getContractExecuteResult().asBytes()).toString());
                        if (result_1) {
                            resultArray_1 = [];
                            Object.keys(result_1).forEach(function (key, index) {
                                if (index < abi[0].outputs.length) {
                                    var output = "" + result_1[key];
                                    if (abi[0].outputs[index].type.toString().includes("[]")) {
                                        var valuesArray = output.split(',');
                                        valuesArray.forEach(function (element) {
                                            if (abi[0].outputs[index].type == "address[]") {
                                                element = util.hexToAccountID(element);
                                            }
                                            else if (abi[0].outputs[index].type == "bytes[]") {
                                                element = util.hexToString(element);
                                            }
                                            resultArray_1.push(element);
                                        });
                                    }
                                    else if (abi[0].outputs[index].type == "bytes") {
                                        output = util.hexToString(output);
                                        resultArray_1.push(output);
                                    }
                                    else {
                                        if (abi[0].outputs[index].type == "address") {
                                            output = util.hexToAccountID(output);
                                        }
                                        resultArray_1.push(output);
                                    }
                                }
                            });
                            finalResult.result = resultArray_1;
                        }
                    }
                    return [2 /*return*/, finalResult];
                }
                else {
                    message = contractCallRecord && contractCallRecord.getContractExecuteResult() ? contractCallRecord.getContractExecuteResult().errorMessage : "";
                    throw message;
                }
        }
    });
}); };

var CONTRACT_CALL = {
    TRANSACTION_FEE: 700000000,
    GAS_FEE: 10000000 //given in Tinybars
};
var CONTRACT_DEPLOY = {
    TRANSACTION_FEE: 2500000000,
    GAS_FEE: 10000000,
    EXPIRATION_TIME: 7890000000,
    AUTORENEW_PERIOD: 7890000 //given in Milliseconds
};
var FILE_CREATE = {
    TRANSACTION_FEE: 500000000,
    GAS_FEE: 10000000 //given in Tinybars
};
var defaults = {
    CONTRACT_CALL: CONTRACT_CALL,
    CONTRACT_DEPLOY: CONTRACT_DEPLOY,
    FILE_CREATE: FILE_CREATE
};

/**
 * A function to handle contract call based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var contractDeployController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, memo, transactionfee, amount, gasfee, fileId, expirationTime, bytecode, abi, params, functionParams, _a, accountData, account, fileIdLike, expirationtime, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = (window).provider;
                    memo = data.memo, transactionfee = data.transactionfee, amount = data.amount, gasfee = data.gasfee, fileId = data.fileId, expirationTime = data.expirationTime, bytecode = data.bytecode, abi = data.abi, params = data.params, functionParams = data.functionParams;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for contract deploy comming soon!";
                case 2:
                    accountData = (window.HashAccount);
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    fileIdLike = fileId ? util.getAccountIdLikeToObj(fileId, 'file') : null;
                    expirationtime = Date.now() + expirationTime;
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    updatedData = {
                        abi: abi,
                        amount: amount,
                        memo: memo,
                        account: account,
                        client: client,
                        fileId: fileIdLike,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                        functionParams: functionParams,
                        expirationtime: expirationtime,
                        bytecode: bytecode,
                        params: params
                    };
                    console.log('RESPONSE CONTRACT CALL SDK::', updatedData);
                    return [4 /*yield*/, contractDeploy(updatedData)];
                case 3:
                    response = _b.sent();
                    console.log('RESPONSE CONTRACT CALL SDK::', response);
                    message = { res: response, type: 'success' };
                    window.postMessage(message, window.location.origin);
                    resolve(response);
                    return [3 /*break*/, 5];
                case 4:
                    console.log('DATA:::', data);
                    extensionid = window.extensionId;
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-deploy-contract");
                    hederaTag.setAttribute("data-fileid", data.fileId || '');
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-params", JSON.stringify(data.params) || '');
                    hederaTag.setAttribute("data-abi", JSON.stringify(data.abi) || '');
                    hederaTag.setAttribute("data-bytecode", data.bytecode || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-gasfee", data.gasfee || '');
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-amount", data.amount || '');
                    hederaTag.setAttribute("data-expirationTime", data.expirationTime || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    window.postMessage(message, window.location.origin);
                    reject(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var contractDeploy = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, transactionfee, amount, gasfee, client, bytecode, expirationtime, functionParams, fileId, autoRenewPeriod, fileCreateTx, contractCreateResult, contractDeployTx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                memo = data.memo, transactionfee = data.transactionfee, amount = data.amount, gasfee = data.gasfee, client = data.client, bytecode = data.bytecode, expirationtime = data.expirationtime, functionParams = data.functionParams;
                fileId = data.fileId;
                autoRenewPeriod = defaults.CONTRACT_DEPLOY.AUTORENEW_PERIOD;
                if (!!fileId) return [3 /*break*/, 2];
                return [4 /*yield*/, fileCreateDeploy(client, bytecode, memo, transactionfee, expirationtime)];
            case 1:
                fileCreateTx = _a.sent();
                if (fileCreateTx.status.code === Status.Success.code) {
                    fileId = fileCreateTx._fileId;
                }
                else {
                    return [2 /*return*/, fileCreateTx];
                }
                _a.label = 2;
            case 2: return [4 /*yield*/, helper.createContractTx(client, fileId, functionParams, amount, gasfee, parseInt(transactionfee), memo, autoRenewPeriod)];
            case 3:
                contractCreateResult = _a.sent();
                contractDeployTx = __assign({}, contractCreateResult.receipt);
                if (contractDeployTx.status.code === Status.Success.code) {
                    return [2 /*return*/, contractDeployTx];
                }
                else {
                    throw contractDeployTx.codeName || 'Error in Contract deployment';
                }
        }
    });
}); };
var fileCreateDeploy = function (client, bytecode, memo, txFee, expirationTime) {
    if (memo === void 0) { memo = "Composer File Create"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var contents, FILE_PART_SIZE, numParts, remainder, firstPartBytes, moreContents, fileReceipt, fileId, i, partBytes, fileAppendResult, partBytes, fileAppendResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!bytecode) {
                        throw new Error('Bytecode can not be empty!');
                    }
                    contents = util.stringToBytes(bytecode);
                    FILE_PART_SIZE = 2800;
                    numParts = Math.floor(contents.length / FILE_PART_SIZE);
                    remainder = contents.length % FILE_PART_SIZE;
                    firstPartBytes = null;
                    moreContents = false;
                    if (contents.length <= FILE_PART_SIZE) {
                        firstPartBytes = contents;
                        remainder = 0;
                    }
                    else {
                        moreContents = true;
                        firstPartBytes = util.copyBytes(0, FILE_PART_SIZE, contents);
                    }
                    return [4 /*yield*/, helper.createFile(client, firstPartBytes, expirationTime, txFee, memo)];
                case 1:
                    fileReceipt = _a.sent();
                    if (!moreContents) return [3 /*break*/, 8];
                    if (!(fileReceipt.status.code === Status.Success.code)) return [3 /*break*/, 8];
                    fileId = fileReceipt._fileId;
                    i = 1;
                    _a.label = 2;
                case 2:
                    if (!(i < numParts)) return [3 /*break*/, 5];
                    partBytes = util.copyBytes(i * FILE_PART_SIZE, FILE_PART_SIZE, contents);
                    return [4 /*yield*/, helper.appendFile(client, fileId, partBytes, txFee)];
                case 3:
                    fileAppendResult = _a.sent();
                    if (fileAppendResult.status.code !== Status.Success.code) {
                        throw new Error("Error Appending File");
                    }
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    if (!(remainder > 0)) return [3 /*break*/, 8];
                    return [4 /*yield*/, util.copyBytes(numParts * FILE_PART_SIZE, remainder, contents)];
                case 6:
                    partBytes = _a.sent();
                    return [4 /*yield*/, helper.appendFile(client, fileId, partBytes, txFee)];
                case 7:
                    fileAppendResult = _a.sent();
                    if (fileAppendResult.status.code !== Status.Success.code) {
                        throw new Error("Error Appending Last Chunks");
                    }
                    _a.label = 8;
                case 8: return [2 /*return*/, fileReceipt];
            }
        });
    });
};

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate = function (data) {
    try {
        // Something is wrong with the data object, return false
        if (!data) {
            throw ('Data is undefined');
        }
        // Checks validity of memo
        var memo = common.isString(data.memo) || '';
        if (util.stringToBytesSize(memo) > 100) {
            throw ('Memo size cannot exceed 100 bytes');
        }
        // Checks validity of recipient list
        var recipientList = common.validateRecipientList(data.recipientlist);
        if (recipientList === false) {
            throw ('Not a valid recipient list');
        }
        // Returning whatever seems to be necessary
        return ({
            memo: memo,
            recipientList: recipientList
        });
    }
    catch (e) {
        throw e;
    }
};

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$1 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, contractId, abi, params, functionParams, amount, transactionfee, gasfee, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                // Something is wrong with the data object, return false
                if (!data) {
                    throw 'Data is undefined';
                }
                memo = common.isString(data.memo) || '';
                if (util.stringToBytesSize(memo) > 100) {
                    throw 'Memo size cannot exceed 100 bytes';
                }
                contractId = common.isAccountIdLike(data.contractid);
                if (contractId === false) {
                    throw ('Not a valid contract id');
                }
                abi = common.validateArrayList(data.abi);
                if (abi === false) {
                    throw ('Not a valid abi');
                }
                params = common.validateArrayList(data.params);
                if (params === false) {
                    try {
                        params = util.normalizeArrayValues(params);
                    }
                    catch (e) {
                        throw ('Error in converting param values');
                    }
                    throw ('Not valid params');
                }
                return [4 /*yield*/, helper.getContractFunctionParams(abi[0], params)];
            case 1:
                functionParams = _a.sent();
                amount = data.amount ? common.isNumber(data.amount) : 0;
                if (amount === false) {
                    throw ('Not valid Amount');
                }
                transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) : defaults.CONTRACT_CALL.TRANSACTION_FEE;
                if (transactionfee === false) {
                    throw ('Not valid Transaction Fee');
                }
                gasfee = data.gasfee ? common.isNumber(data.gasfee) : defaults.CONTRACT_CALL.GAS_FEE;
                if (gasfee === false) {
                    throw ('Not valid Gas Fee');
                }
                // Returning whatever seems to be necessary
                return [2 /*return*/, ({
                        memo: memo,
                        contractId: contractId,
                        abi: abi,
                        params: params,
                        amount: amount,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                        functionParams: functionParams
                    })];
            case 2:
                e_1 = _a.sent();
                throw e_1;
            case 3: return [2 /*return*/];
        }
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$2 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, fileId, abi, params, functionParams, amount, transactionfee, gasfee, expirationTime, bytecode, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                // Something is wrong with the data object, return false
                if (!data) {
                    //@TODO make error constants
                    throw 'Data is undefined';
                }
                memo = common.isString(data.memo) || '';
                if (util.stringToBytesSize(memo) > 100) {
                    throw 'Memo size cannot exceed 100 bytes';
                }
                fileId = data.fileid ? common.isAccountIdLike(data.fileid) : '';
                if (fileId === false) {
                    throw 'Not a valid file id';
                }
                abi = common.validateArrayList(data.abi);
                if (abi === false) {
                    throw 'Not a valid abi';
                }
                params = common.validateArrayList(data.params);
                if (params === false) {
                    try {
                        params = util.normalizeArrayValues(params);
                    }
                    catch (e) {
                        throw 'Error in converting param values';
                    }
                    throw 'Not valid params';
                }
                return [4 /*yield*/, helper.getContractFunctionParams(abi[0], params)];
            case 1:
                functionParams = _a.sent();
                amount = data.amount ? common.isNumber(data.amount) : 0;
                if (amount === false) {
                    throw 'Not valid Amount';
                }
                transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) : defaults.CONTRACT_DEPLOY.TRANSACTION_FEE;
                if (transactionfee === false) {
                    throw 'Not valid Transaction Fee';
                }
                gasfee = data.gasfee ? common.isNumber(data.gasfee) : defaults.CONTRACT_DEPLOY.GAS_FEE;
                if (gasfee === false) {
                    throw 'Not valid Gas Fee';
                }
                expirationTime = data.expirationtime ? common.isNumber(data.expirationtime) : defaults.CONTRACT_DEPLOY.EXPIRATION_TIME;
                if (expirationTime === false) {
                    throw 'Not valid Expiration Time';
                }
                bytecode = common.isString(data.bytecode);
                if (bytecode === false) {
                    throw 'Not a valid Bytecode';
                }
                // Returning whatever seems to be necessary
                return [2 /*return*/, ({
                        memo: memo,
                        fileId: fileId,
                        abi: abi,
                        params: params,
                        amount: amount,
                        transactionfee: transactionfee,
                        expirationTime: expirationTime,
                        gasfee: gasfee,
                        bytecode: bytecode,
                        functionParams: functionParams
                    })];
            case 2:
                e_1 = _a.sent();
                throw e_1;
            case 3: return [2 /*return*/];
        }
    });
}); };

// Exports validation as one module for the ease to use it
var validateService = function (data, type) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 9]);
                _a = type;
                switch (_a) {
                    case 'crypto-transfer': return [3 /*break*/, 1];
                    case 'contract-call': return [3 /*break*/, 2];
                    case 'contract-deploy': return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 1: return [2 /*return*/, validate(data)];
            case 2: return [4 /*yield*/, validate$1(data)];
            case 3: return [2 /*return*/, _b.sent()];
            case 4: return [4 /*yield*/, validate$2(data)];
            case 5: return [2 /*return*/, _b.sent()];
            case 6: throw "No service found!";
            case 7: return [3 /*break*/, 9];
            case 8:
                e_1 = _b.sent();
                console.log('Error in Service Validation:::', e_1);
                throw e_1;
            case 9: return [2 /*return*/];
        }
    });
}); };

var _callback = null;
var _resolve = null;
var _reject = null;
(window).HashAccount = {
    accountId: '0.0.17210',
    keys: {
        privateKey: "302e020100300506032b657004220420dc3460f46df4673acfbce2f2218990fff07e38e24b99c4bb2b8213f6e275f9b9"
    },
    mnemonics: '',
    network: 'testnet'
};
(window).provider = 'composer';
/**
 * triggers exposed crypto service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerCryptoTransfer = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, error_1, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    util.isProviderSet();
                    updatedData = validateService(data, 'crypto-transfer');
                    return [4 /*yield*/, cryptoTransferController(updatedData)];
                case 1:
                    _a.sent();
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    err = util.getFriendlyErrorObject(error_1);
                    console.log('Error in cryptoTransfer:::', error_1);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed contract call service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerSmartContract = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, error_2, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    util.isProviderSet();
                    return [4 /*yield*/, validateService(data, 'contract-call')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, contractCallController(updatedData)];
                case 2:
                    _a.sent();
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    err = util.getFriendlyErrorObject(error_2);
                    console.log('Error in contractCall:::', error_2);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed contract deploy service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var deploySmartContract = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, error_3, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    util.isProviderSet();
                    return [4 /*yield*/, validateService(data, 'contract-deploy')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, contractDeployController(updatedData)];
                case 2:
                    _a.sent();
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    err = util.getFriendlyErrorObject(error_3);
                    console.log('Error in contractDeploy:::', error_3);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
var receiveMessage = function (event) {
    if (event.data.type && event.origin === window.location.origin) {
        if (event.data.type.includes('deny')) {
            _callback && _callback(event.data.res, null);
            _reject && _reject(event.data.res);
        }
        else {
            _callback && _callback(null, event.data.res);
            _resolve && _resolve(event.data.res);
        }
    }
};
window.addEventListener("message", receiveMessage, false);

var index = {
    sum: sum,
    selectProvider: selectProvider,
    setAccount: setAccount,
    triggerCryptoTransfer: triggerCryptoTransfer,
    triggerSmartContract: triggerSmartContract,
    deploySmartContract: deploySmartContract
};

export default index;
//# sourceMappingURL=index.es.js.map
