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

var theme = {
    default: {
        white: 'rgba(255,255,255,1)',
        black: 'rgba(0,0,0,1)',
        // Common
        primaryColor: 'rgb(24, 189, 208)',
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
var stylesMain = "\n    .modal-parent{\n        position:fixed;\n        display:flex;\n        font-family:inherit;\n        align-items: center;\n        justify-content:center;\n        width:100%;height:100%;\n        left:0;\n        top:0;\n        overflow:hidden;\n        z-index:" + t.modalZindex + ";\n        background:" + t.modalOverlayColor + ";\n    }\n\n    middleware-selector .modal-container{\n        position:relative;\n        width:100%;\n        max-width:600px;\n        max-height:800px;\n        margin:15px;\n        background:" + t.white + ";\n        border-radius:" + t.modalRadius + ";\n    }\n\n    middleware-selector .modal-header{\n        display: flex;\n        justify-content: \n        space-between;\n        background:" + t.primaryColor + ";\n        padding: 14px 16px;\n        border-top-left-radius: " + t.modalRadius + ";\n        border-top-right-radius: " + t.modalRadius + ";\n        color: " + t.white + ";\n    }\n\n    middleware-selector .modal-body{\n        display:flex;\n        flex-wrap:wrap;\n    }\n\n    middleware-selector .modal-title{\n        font-size:20px;\n    }\n\n    middleware-selector .cancel-button{\n        font-size:20px;\n        cursor:pointer;\n    }\n";

var customElementInjector = function (element, targetTag) {
    if (targetTag === void 0) { targetTag = 'body'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var styleTag, customElement, parentTag;
        return __generator(this, function (_a) {
            if (!document.querySelector('#hash-sdk-style')) {
                styleTag = document.createElement("style");
                styleTag.id = 'hash-sdk-style';
                styleTag.innerHTML = stylesMain;
                document.getElementsByTagName("head")[0].appendChild(styleTag);
            }
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

var t$1 = theme['default'];
var cardStyle = "\n    .card-container{\n        padding:18px 12px;\n        font-family:inherit;\n        margin:25px 18px;\n        border-radius:6px;\n        flex:1;\n        display:flex;\n        flex-direction:column;\n        align-items:center;\n        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n        text-align:center;min-width: 100px;\n        transition: all 0.2s ease;\n    }\n\n    .card-container:hover{\n        background:rgb(35, 234, 181);\n        color:" + t$1.white + ";\n        transform: scale(1.05);\n    }\n\n    middleware-card .card-img{\n        width:60px;\n        height:auto;\n    }\n\n    middleware-card .card-title{\n        margin-top: 8px;\n        font-size: 18px;\n    }\n\n    middleware-card .card-desc{\n        margin-top: 6px;\n        font-size: 12px;\n        color:rgba(0,0,0,0.6);\n        font-style:italic;\n    }\n\n    middleware-card .card-recommended{\n        margin-top: 6px;\n        font-size: 12px;\n        color:rgb(234, 92, 110,0.7);\n    }\n";

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
    //@TODO expose theme options
    // const t = theme['default'];
    try {
        // Element creation.
        var parentDiv = document.createElement(myCustomElement);
        var modalContainer = document.createElement('div');
        var modalHeader = document.createElement('div');
        var modalBody = document.createElement('div');
        var modalFooter = document.createElement('div');
        var cancelButton = document.createElement('span');
        var modalTitle = document.createElement('span');
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

// import { supportCallbackAndPromiseResponse } from '../utils';
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
    switch (provider) {
        case 'hardware':
            //@TODO include when hardware comes in
            break;
        case 'composer':
            (global).middleware = provider;
            break;
    }
    console.log('GLOBAL ::::', global);
};

var index = {
    sum: sum,
    selectMiddleware: selectMiddleware
};

export default index;
//# sourceMappingURL=index.es.js.map
