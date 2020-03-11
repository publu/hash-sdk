'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sum = function (a, b) { return a + b; };

var customElementInjector = function (element, targetTag) {
    if (targetTag === void 0) { targetTag = 'body'; }
    var customElement = typeof element === 'string' ? document.createElement(element) : element;
    var parentTag = document.querySelector(targetTag);
    parentTag && parentTag.appendChild(customElement);
};
var elementDestructor = function (element) {
    var customElementName = typeof element === 'string' ? element : element.tagName.toLowerCase();
    var targetTag = document.querySelector(customElementName);
    targetTag && targetTag.parentNode && targetTag.parentNode.removeChild(targetTag);
};

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

var Images = {
    hardwareWallet: require('../assets/hardware-wallet.svg'),
    softwareSDKImage: require('../assets/software-sdk.svg'),
    composerLogo: require('../assets/composer-logo.svg')
};

var myCustomElement = 'middleware-selector';
var customElementModalTitle = 'Select a middleware';
var cardData = [
    {
        id: 'option-1',
        title: 'Hardware',
        description: 'Ledger Nano (Hardware Wallet)',
        imagePath: Images.hardwareWallet,
        active: false,
        recommended: true
    },
    {
        id: 'option-2',
        title: 'Composer',
        description: 'Extension based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.composerLogo,
        active: true,
        recommended: true
    },
    {
        id: 'option-3',
        title: 'Software',
        description: 'SDK based wallet (Private Key, Keystore, Mnemonic phrase)',
        imagePath: Images.softwareSDKImage,
        active: true,
        recommended: false
    },
];
var renderMiddlewareSelectorUI = function (cb) {
    //@TODO expose theme options
    var t = theme['default'];
    try {
        // Element creation.
        var parentDiv = document.createElement(myCustomElement);
        var modalContainer = document.createElement('div');
        var modalHeader = document.createElement('div');
        var modalBody = document.createElement('div');
        var modalFooter = document.createElement('div');
        var cancelButton = document.createElement('span');
        var modalTitle = document.createElement('span');
        // // Element Identification
        // parentDiv.setAttribute('class','modal-parent');
        // modalContainer.setAttribute('class','modal-container');
        // modalHeader.setAttribute('class','modal-header');
        // modalFooter.setAttribute('class','modal-footer');
        // cancelButton.setAttribute('class','cancel-btn');
        //Styling the Elements
        parentDiv.style.cssText = "position:fixed;display:flex;align-items: center;justify-content:center;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:" + t.modalZindex + ";background:" + t.modalOverlayColor + ";";
        modalContainer.style.cssText = "position:relative;width:100%;max-width:600px;max-height:800px;margin:15px;background:" + t.white + ";border-radius:" + t.modalRadius + ";";
        modalHeader.style.cssText = "display: flex;justify-content: space-between;background:" + t.primaryColor + ";padding: 14px 16px;border-top-left-radius: " + t.modalRadius + ";border-top-right-radius: " + t.modalRadius + ";color: " + t.white + ";";
        modalBody.style.cssText = "display:flex;flex-wrap:wrap";
        modalTitle.style.cssText = "font-size:20px;";
        cancelButton.style.cssText = "font-size:20px;cursor:pointer";
        // Fetching dynamic variables
        cancelButton.innerHTML = "&#x2715";
        modalTitle.innerHTML = "" + customElementModalTitle;
        renderUICard(cardData, modalBody, function (opt) {
            cb && cb(opt);
        });
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
    }
};
var renderUICard = function (data, targetElement, cb) {
    if (Array.isArray(data) && data.length > 0) {
        var _loop_1 = function (d) {
            var cardData_1 = d;
            var newUICard = document.createElement('div');
            newUICard.id = cardData_1.id;
            newUICard.style.cssText = (cardData_1.active ? 'cursor:pointer;' : 'pointer-events:none;filter: grayscale(1);background: rgba(0,0,0,0.1);') + "\n            padding:18px 12px;margin:25px 18px;border-radius:6px;\n            flex:1;display:flex;flex-direction:column;align-items:center;\n            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n            -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);\n            text-align:center;min-width: 100px;\n            ";
            //Image
            var cardImg = document.createElement('img');
            cardImg.src = cardData_1.imagePath;
            cardImg.style.cssText = "width:60px;height:auto;";
            // Title Text
            var titleTextEle = document.createElement('div');
            titleTextEle.innerHTML = cardData_1.title;
            titleTextEle.style.cssText = "margin-top: 8px;font-size: 18px;";
            // Description Text
            var desc = document.createElement('div');
            desc.innerHTML = cardData_1.description;
            desc.style.cssText = "margin-top: 6px;font-size: 12px;color:rgba(0,0,0,0.6);font-style:italic";
            // Recommendation
            var notRecommended = document.createElement('div');
            notRecommended.innerHTML = cardData_1.recommended ? '' : 'Not Recommended';
            notRecommended.style.cssText = "margin-top: 6px;font-size: 12px;color:rgb(234, 92, 110,0.7)";
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
    elementDestructor(myCustomElement);
};

var selectMiddleware = function () {
    renderMiddlewareSelectorUI();
};

var index = {
    sum: sum,
    selectMiddleware: selectMiddleware
};

exports.default = index;
//# sourceMappingURL=index.js.map
