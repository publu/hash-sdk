'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdk = require('@hashgraph/sdk');

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
    targetTag && targetTag.parentNode && targetTag.parentNode.removeChild(targetTag);
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
    var cardStyleTag = document.querySelector('#hash-card-style');
    if (cardStyleTag) {
        elementDestructor(cardStyleTag);
    }
    elementDestructor(myCustomElement);
};

var selectMiddleware = function (cb) {
    return new Promise(function (resolve, reject) {
        renderMiddlewareSelectorUI(function (err, res) {
            setMiddleware(res.provider);
            cb && cb(err, res);
            err ? reject(err) : resolve(res);
        });
    });
};
var setMiddleware = function (provider) {
    (window).middleware = provider;
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
        modalHeader.appendChild(cancelButton);
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
    if (!document.querySelector('#hash-sdk-style')) {
        var styleTag = document.createElement("style");
        styleTag.id = 'hash-sdk-style';
        styleTag.innerHTML = accountStyle;
        document.getElementsByTagName("head")[0].appendChild(styleTag);
    }
    var cardStyleTag = document.querySelector('#hash-card-style');
    if (cardStyleTag) {
        elementDestructor(cardStyleTag);
    }
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
 * Validates recipient List
 * @param {string[] | Array<string>} arr refers to value passed by function caller
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
    isAccountIdObject: isAccountIdObject
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
 * Create a valid hedera client
 * @param {Object} operator
 * @param {Object} network
 * @returns {any} returns hedera client
 */
var createHederaClient = function (operator, network) {
    var currentNetwork = network;
    var client;
    if (currentNetwork == 'testnet') {
        client = new sdk.Client({
            operator: operator
        });
    }
    else {
        client = new sdk.Client({
            network: {
                "https://proxy.hashingsystems.com": { shard: 0, realm: 0, account: 3 }
            },
            operator: operator
        });
    }
    return client;
};
/**
 * Create a valid hedera client
 * @param {Object} account
 * @param {Object} network
 * @returns {any} returns hedera client
 */
var createClientOperator = function (account, privatekey) {
    var privateKey = sdk.Ed25519PrivateKey.fromString(privatekey);
    return {
        account: account,
        privateKey: privateKey
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
var util = {
    stringToBytes: stringToBytes,
    stringToBytesSize: stringToBytesSize,
    getAccountIdObjectFull: getAccountIdObjectFull,
    getAccountIdLikeToObj: getAccountIdLikeToObj,
    getAccountObjToIdLike: getAccountObjToIdLike,
    getFriendlyErrorObject: getFriendlyErrorObject,
    createHederaClient: createHederaClient,
    createClientOperator: createClientOperator,
    sumFromRecipientList: sumFromRecipientList
};
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

var cryptoTransfer = function (data) {
    new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var accountData, recipientList, memo, account, fromAccount, amount, operator, client, formattedData, res, e_1, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    accountData = (window.HashAccount);
                    console.log('ACCOUNT DATA', accountData);
                    recipientList = data.recipientList;
                    memo = data.memo;
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    fromAccount = {};
                    fromAccount.acc = accountData.accountId.split('.')[2];
                    fromAccount.privateKey = accountData.privateKey;
                    amount = util.sumFromRecipientList(recipientList);
                    operator = util.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = util.createHederaClient(operator, accountData.network);
                    formattedData = {
                        amount: amount,
                        memo: memo,
                        operator: operator,
                        recipientList: recipientList,
                        account: account,
                        client: client,
                        toAccount: util.getAccountIdLikeToObj(recipientList[0].to),
                        network: accountData.network
                    };
                    return [4 /*yield*/, doCryptoTransfer(formattedData)];
                case 1:
                    res = _a.sent();
                    formattedData.receipt = true;
                    formattedData.transactionId = res.transactionId;
                    console.log('CRYPTO RECIEPT', formattedData);
                    resolve({
                        nodePrecheckcode: res.receipt.status.code,
                        receiptStatus: res.receipt.status.code,
                        transactionId: res.transactionId
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    err = util.getFriendlyErrorObject(e_1);
                    console.log('Error in cryptoTransfer:::', e_1);
                    reject(err);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
var doCryptoTransfer = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var transactionId, receipt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new sdk.CryptoTransferTransaction()
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
                return [2 /*return*/, {
                        transactionId: transactionId.toString(),
                        receipt: __assign({}, receipt)
                    }];
        }
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate = function (data, callback) {
    // Something is wrong with the data object, return false
    if (!data) {
        throw new Error('Data is undefined');
    }
    // Checks validity of memo
    var memo = common.isString(data.memo) || '';
    if (util.stringToBytesSize(memo) > 100) {
        throw new Error('Memo size cannot exceed 100 bytes');
    }
    // Checks validity of recipient list
    var recipientList = common.validateRecipientList(data.recipientlist);
    if (recipientList === false) {
        throw new Error('Not a valid recipient list');
    }
    // Returning whatever seems to be necessary
    callback(null, {
        memo: memo,
        recipientList: recipientList
    });
};

// Exports validation as one module for the ease to use it
var validate$1 = {
    validateCrytoTransferData: validate
};

var triggerCryptoTransfer = function (data) {
    return new Promise(function (resolve, reject) {
        validate$1.validateCrytoTransferData(data, function (err, res) { return __awaiter(void 0, void 0, void 0, function () {
            var response, e_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(!err && res)) return [3 /*break*/, 2];
                        return [4 /*yield*/, cryptoTransfer(res)];
                    case 1:
                        response = _a.sent();
                        resolve(response);
                        return [3 /*break*/, 3];
                    case 2: throw err;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        err_1 = util.getFriendlyErrorObject(e_1);
                        console.log('Error in cryptoTransfer:::', e_1);
                        reject(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    });
};

var index = {
    sum: sum,
    selectMiddleware: selectMiddleware,
    setAccount: setAccount,
    triggerCryptoTransfer: triggerCryptoTransfer
};

exports.default = index;
//# sourceMappingURL=index.js.map
