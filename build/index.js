'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sha3 = require('sha3');
var BigNumber = _interopDefault(require('bignumber.js'));
var sdk = require('@hashgraph/sdk');
var web3EthAbi = require('web3-eth-abi');
var forge = _interopDefault(require('node-forge'));

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

var sum = function (a, b) { return a + b; };

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
    var addressHash = new sha3.SHA3().update(address.toLowerCase().replace(/^0x/i, '')).digest("hex"); //SHA3Hash(address.toLowerCase()).replace(/^0x/i, '');
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
/**
 * Signature based mime-type store
 * @param {string} signature refers to value passed by function caller
 * @returns {string} returns mime-type
*/
var getMimetype = function (signature) {
    switch (signature) {
        case '89504E47':
            return 'image/png';
        case '47494638':
            return 'image/gif';
        case '25504446':
            return 'application/pdf';
        case 'FFD8FFDB':
        case 'FFD8FFE0':
        case 'FFD8FFE1':
            return 'image/jpeg';
        case '504B0304':
            return 'application/zip';
        default:
            return 'Unknown filetype';
    }
};
/**
 * Detect File type based on buffer
 * @param {Uint8Array} buffer refers to value passed by function caller
 * @returns {string} returns mime-type
*/
var detectFileType = function (buffer) {
    // const uint = new Uint8Array(buffer)
    var bytes = [];
    buffer.forEach(function (byte) {
        bytes.push(byte.toString(16));
    });
    var hex = bytes.join('').toUpperCase();
    return getMimetype(hex);
};
/**
 * Creates URL from SVG string
 * @param {string} svg refers to value passed by function caller
 * @returns {string} returns image url
*/
var svgToUrlGenerator = function (svg) {
    try {
        var blob = new Blob([svg], { type: 'image/svg+xml' });
        return URL.createObjectURL(blob);
    }
    catch (e) {
        // mostly falls here when its an server env
        return 'false';
    }
};
/**
 * Checks the running environment
 * @returns {string} returns environment
*/
var checkEnvironment = function () {
    try {
        if (window) {
            return 'client';
        }
        else {
            return 'server';
        }
    }
    catch (e) {
        // mostly falls here when its an server env
        return 'server';
    }
};
/**
 * Stores your key value pair globally based on the environment
*/
var storeGlobally = function (key, value) {
    if (checkEnvironment() === 'client') {
        (window)[key] = value;
    }
    else {
        (global)[key] = value;
    }
};
/**
 * Gets data from global varaibles based on the environment
 * @returns {string} returns data of the requested store variable
*/
var getStoreData = function (key) {
    if (checkEnvironment() === 'client') {
        return (window)[key] ? (window)[key] : null;
    }
    else {
        return (global)[key] ? (global)[key] : null;
    }
};
/**
 * Checks the value and type of store request and stores accordingly
*/
var setStoreData = function (value, type) {
    if (type === 'provider') {
        value = value ? value.toLowerCase().trim() : '';
        if (value && (value === 'composer' || value === 'hardware' || value === 'software')) {
            storeGlobally(type, value);
        }
        else {
            throw 'Not a vaid provider (should be hardware, composer or software)';
        }
    }
    else if (type === 'network') {
        value = value ? value.toLowerCase().trim() : '';
        if (value && (value === 'composer' || value === 'hardware' || value === 'software')) {
            storeGlobally(type, value);
        }
        else {
            throw 'Not a vaid network (should be mainnet or testnet)';
        }
    }
    else if (type === 'HashAccount') {
        if (value && (value.network && value.accountId)) {
            storeGlobally(type, value);
        }
        else {
            throw 'Not a vaid accountData Object';
        }
    }
    else {
        throw 'Invalid store variable !';
    }
};
var util = {
    stringToBytes: stringToBytes,
    stringToBytesSize: stringToBytesSize,
    getAccountIdObjectFull: getAccountIdObjectFull,
    getAccountIdLikeToObj: getAccountIdLikeToObj,
    getAccountObjToIdLike: getAccountObjToIdLike,
    getFriendlyErrorObject: getFriendlyErrorObject,
    sumFromRecipientList: sumFromRecipientList,
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
    copyBytes: copyBytes,
    getMimetype: getMimetype,
    detectFileType: detectFileType,
    svgToUrlGenerator: svgToUrlGenerator,
    checkEnvironment: checkEnvironment,
    setStoreData: setStoreData,
    getStoreData: getStoreData
};

var hardwareWallet = "<?xml version=\"1.0\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512px\" viewBox=\"0 0 512 512\" width=\"512px\" class=\"\"><g><g><path d=\"m361 7.5v210h-135l105-210z\" fill=\"#acd2f6\" data-original=\"#ACD2F6\" class=\"\" style=\"fill:#ACD2F6\"/><path d=\"m331 7.5v60l-30 15 30 15v120h-180v-210z\" fill=\"#c4f3ff\" data-original=\"#C4F3FF\" style=\"fill:#C4F3FF\" class=\"\"/><path d=\"m211 67.5-15 15 15 15h30v-30z\" fill=\"#4e4cd3\" data-original=\"#4E4CD3\" class=\"\" style=\"fill:#18B1D0\" data-old_color=\"#4e4cd3\"/><path d=\"m181 67.5h30v30h-30z\" fill=\"#666ddc\" data-original=\"#666DDC\" style=\"fill:#66C3DC\" class=\"\" data-old_color=\"#666ddc\"/><path d=\"m301 67.5-15 15 15 15h30v-30z\" fill=\"#4e4cd3\" data-original=\"#4E4CD3\" class=\"\" style=\"fill:#18B1D0\" data-old_color=\"#4e4cd3\"/><path d=\"m271 67.5h30v30h-30z\" fill=\"#666ddc\" data-original=\"#666DDC\" style=\"fill:#66C3DC\" class=\"\" data-old_color=\"#666ddc\"/><path d=\"m361 157.5-180 75h210v-75z\" fill=\"#ff545a\" data-original=\"#FF545A\" style=\"fill:#548AFF\" class=\"active-path\" data-old_color=\"#ff545a\"/><path d=\"m121 157.5h240v75h-240z\" fill=\"#ff7647\" data-original=\"#FF7647\" style=\"fill:#4793FF\" class=\"\" data-old_color=\"#ff7647\"/><path d=\"m391 187.5-30 30v287h30c16.569 0 30-13.431 30-30v-287z\" fill=\"#5c2bc8\" data-original=\"#5C2BC8\" class=\"\" style=\"fill:#2B89C8\" data-old_color=\"#5c2bc8\"/><path d=\"m91 187.5v287c0 16.569 13.431 30 30 30h240c16.569 0 30-13.431 30-30v-287z\" fill=\"#4e4cd3\" data-original=\"#4E4CD3\" class=\"\" style=\"fill:#18B1D0\" data-old_color=\"#4e4cd3\"/><circle cx=\"256\" cy=\"429.5\" fill=\"#05ff77\" r=\"15\" data-original=\"#05FF77\" style=\"fill:#05FF77\"/><path d=\"m241 60h-60c-4.142 0-7.5 3.358-7.5 7.5v30c0 4.142 3.358 7.5 7.5 7.5h60c4.142 0 7.5-3.358 7.5-7.5v-30c0-4.142-3.358-7.5-7.5-7.5zm-7.5 30h-45v-15h45z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/><path d=\"m331 60h-60c-4.142 0-7.5 3.358-7.5 7.5v30c0 4.142 3.358 7.5 7.5 7.5h60c4.142 0 7.5-3.358 7.5-7.5v-30c0-4.142-3.358-7.5-7.5-7.5zm-7.5 30h-45v-15h45z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/><path d=\"m421 180h-22.5v-22.5c0-4.142-3.358-7.5-7.5-7.5h-22.5v-142.5c0-4.142-3.358-7.5-7.5-7.5h-210c-4.142 0-7.5 3.358-7.5 7.5v142.5h-22.5c-4.142 0-7.5 3.358-7.5 7.5v22.5h-22.5c-4.142 0-7.5 3.358-7.5 7.5v128.5c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-121h315v279.5c0 12.407-10.093 22.5-22.5 22.5h-270c-12.407 0-22.5-10.093-22.5-22.5v-128.5c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v128.5c0 20.678 16.822 37.5 37.5 37.5h270c20.678 0 37.5-16.822 37.5-37.5v-287c0-4.142-3.358-7.5-7.5-7.5zm-262.5-165h195v135h-195zm-30 150h255v15h-255z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/><path d=\"m278.5 429.5c0-12.407-10.093-22.5-22.5-22.5s-22.5 10.093-22.5 22.5 10.093 22.5 22.5 22.5 22.5-10.093 22.5-22.5zm-30 0c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5-7.5-3.364-7.5-7.5z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/></g></g> \n</svg>";

var softwareSdk = "<?xml version=\"1.0\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1_1_\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\" class=\"\"><g><g>\n\t<g>\n\t\t<rect x=\"16\" y=\"20\" style=\"fill:#18B1D0\" width=\"32\" height=\"13\" data-original=\"#F0BC5E\" class=\"active-path\" data-old_color=\"#F0BC5E\"/>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path style=\"fill:#18B1D0\" d=\"M34.781,63h-5.562l-0.625-2.503c-0.802-0.237-1.576-0.559-2.313-0.96l-2.214,1.328l-3.932-3.932     l1.328-2.214c-0.401-0.737-0.723-1.512-0.96-2.313L18,51.781v-5.562l2.503-0.625c0.237-0.802,0.559-1.576,0.96-2.313     l-1.328-2.214l3.932-3.932l2.214,1.328c0.737-0.401,1.512-0.723,2.313-0.96L29.219,35h5.562l0.625,2.503     c0.802,0.237,1.576,0.559,2.313,0.96l2.214-1.328l3.932,3.932l-1.328,2.214c0.401,0.737,0.723,1.512,0.96,2.313L46,46.219v5.562     l-2.503,0.625c-0.237,0.802-0.559,1.576-0.96,2.313l1.328,2.214l-3.932,3.932l-2.214-1.328c-0.737,0.401-1.512,0.723-2.313,0.96     L34.781,63z\" data-original=\"#F0BC5E\" class=\"active-path\" data-old_color=\"#F0BC5E\"/>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<rect x=\"16\" y=\"27\" width=\"32\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"35\" y=\"31\" width=\"13\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"16\" y=\"31\" width=\"13\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"35\" y=\"23\" width=\"13\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"16\" y=\"23\" width=\"13\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"16\" y=\"19\" width=\"32\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<path d=\"M52,39c0,2.206-1.794,4-4,4v2c3.309,0,6-2.691,6-6v-5.171c0-1.557,0.606-3.021,1.707-4.122L56.414,29l-0.707-0.707    C54.606,27.192,54,25.729,54,24.171V19c0-3.309-2.691-6-6-6v2c2.206,0,4,1.794,4,4v5.171c0,1.773,0.585,3.457,1.665,4.829    C52.585,30.372,52,32.056,52,33.829V39z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<path d=\"M12,19c0-2.206,1.794-4,4-4v-2c-3.309,0-6,2.691-6,6v5.171c0,1.557-0.606,3.021-1.707,4.122L7.586,29l0.707,0.707    C9.394,30.808,10,32.271,10,33.829V39c0,3.309,2.691,6,6,6v-2c-2.206,0-4-1.794-4-4v-5.171c0-1.773-0.585-3.457-1.665-4.829    C11.415,27.628,12,25.944,12,24.171V19z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<path d=\"M32,45c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S34.206,45,32,45z M32,51c-1.103,0-2-0.897-2-2s0.897-2,2-2    s2,0.897,2,2S33.103,51,32,51z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<path d=\"M32,41c-1.328,0-2.645,0.333-3.807,0.962l0.953,1.759C30.017,43.25,31.003,43,32,43c3.309,0,6,2.691,6,6    c0,0.997-0.25,1.983-0.721,2.854l1.759,0.953C39.667,51.645,40,50.328,40,49C40,44.589,36.411,41,32,41z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<path d=\"M32,55c-3.309,0-6-2.691-6-6c0-0.997,0.25-1.983,0.721-2.854l-1.759-0.953C24.333,46.355,24,47.672,24,49    c0,4.411,3.589,8,8,8c1.328,0,2.645-0.333,3.807-0.962l-0.953-1.759C33.983,54.75,32.997,55,32,55z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<path d=\"M60,1H4C2.346,1,1,2.346,1,4v46h17v-2H3V11h58v37H46v2h17V4C63,2.346,61.654,1,60,1z M3,9V4c0-0.551,0.449-1,1-1h56    c0.551,0,1,0.449,1,1v5H3z\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"5\" y=\"5\" width=\"2\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"9\" y=\"5\" width=\"2\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t\t<rect x=\"13\" y=\"5\" width=\"2\" height=\"2\" data-original=\"#000000\" class=\"\" style=\"fill:#000000\" data-old_color=\"#000000\"/>\n\t</g>\n</g></g> </svg>";

var composerLogo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n        <circle id=\"path-1\" cx=\"25\" cy=\"25\" r=\"25\"></circle>\n    </defs>\n    <g id=\"Pages\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"deploy\" transform=\"translate(-651.000000, -5315.000000)\">\n            <g id=\"Group-4\" transform=\"translate(651.000000, 5315.000000)\">\n                <g id=\"api_icon\">\n                    <mask id=\"mask-2\" fill=\"white\">\n                        <use xlink:href=\"#path-1\"></use>\n                    </mask>\n                    <use id=\"Oval\" fill=\"#1EBEFF\" xlink:href=\"#path-1\"></use>\n                    <polygon id=\"Rectangle\" fill=\"#A1E4FF\" mask=\"url(#mask-2)\" points=\"15 15 32 15 50 33 50 50 33 50 15 32\"></polygon>\n                    <rect id=\"Rectangle\" fill=\"#1EBEFF\" mask=\"url(#mask-2)\" x=\"15\" y=\"15\" width=\"17\" height=\"17\"></rect>\n                    <polygon id=\"Path-4\" fill=\"#FFFFFF\" mask=\"url(#mask-2)\" points=\"15 32 0 32 0 0 32 0 32 15 15 15\"></polygon>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";

var Images = {
    hardwareWallet: util.svgToUrlGenerator(hardwareWallet),
    softwareSDKImage: util.svgToUrlGenerator(softwareSdk),
    composerLogo: util.svgToUrlGenerator(composerLogo)
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
var accountStyle = "\n    .modal-parent{\n        position:fixed;\n        display:flex;\n        font-family:inherit;\n        align-items: center;\n        justify-content:center;\n        width:100%;height:100%;\n        left:0;\n        top:0;\n        overflow:hidden;\n        z-index:" + t$2.modalZindex + ";\n        background:" + t$2.modalOverlayColor + ";\n    }\n\n    account-setter .modal-container{\n        position:relative;\n        width:100%;\n        max-width:600px;\n        max-height:800px;\n        margin:15px;\n        background:" + t$2.white + ";\n        border-radius:" + t$2.modalRadius + ";\n    }\n\n    account-setter .modal-header{\n        display: flex;\n        justify-content: \n        space-between;\n        background:" + t$2.primaryColor + ";\n        padding: 14px 16px;\n        border-top-left-radius: " + t$2.modalRadius + ";\n        border-top-right-radius: " + t$2.modalRadius + ";\n        color: " + t$2.white + ";\n    }\n\n    account-setter .close-btn{\n        cursor:pointer;\n        font-size:20px;\n    }\n\n    account-setter .modal-body{\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n    }\n\n    account-setter .modal-tab-row{\n        display: flex;\n        background: #ececec;\n    }\n\n    .modal-tab-row .tab-item{\n        padding: 10px 20px;\n        background: #d0cece;\n        cursor:pointer;\n    }\n\n    .modal-tab-row .tab-item.active{\n        background: #fff;\n        cursor:default;\n    }\n\n    account-setter .modal-body-wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex-wrap:wrap;\n        flex: 1;\n        margin: 15px 20px;\n    }\n\n    .modal-body-wrapper .phrase-input .input-ele{\n        height: 68px;\n    }\n\n\n    account-setter .input-wrapper{\n        width: 100%;\n        margin:10px 0px;\n    }\n\n    account-setter .input-ele{\n        width: calc(100% - 20px);\n        padding:0px 10px;\n        height: 36px;\n        border-radius: 4px;\n        font-size: 14px;\n        background: rgba(255,255,255,1);\n        border: 1px solid rgba(0,0,0,0.2);\n    }\n\n    select.input-ele{\n        width: 100%;\n    }\n\n    account-setter .label-input{\n        font-size: 14px;\n        opacity:0.8;\n    }\n\n    account-setter .modal-title{\n        font-size:20px;\n    }\n\n    account-setter .close-button{\n        font-size:20px;\n        cursor:pointer;\n    }\n\n    account-setter button{\n        border-radius: 5px;\n        border: none;\n        font-size: 15px;\n        padding: 10px 20px;\n        margin:10px;\n        cursor:pointer;\n        opacity:0.8;\n        transition:all 0.2s ease;\n    }\n\n    account-setter button:hover{\n        opacity:1;\n        transform:scale(1.02);\n    }\n\n    account-setter .modal-footer{\n        display:flex;\n        justify-content:center;\n    }\n\n    .cancel-btn{\n        background: rgba(0,0,0,0.05);\n    }\n\n    .confirm-btn{\n        background: " + t$2.secondaryColor + ";\n    }\n";

/**
 * Merges abi and params to return hedera compatible data
 * @param {Array} abi refers to abi array value passed by caller
 * @param {Array} params refers to params aarray value passed by caller
 * @returns {any} returns functionParams
*/
var getContractFunctionParams = function (abi, params) {
    // Function params instance
    var functionParams = new sdk.ContractFunctionParams();
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
        client = sdk.Client.forTestnet();
    }
    else {
        client = sdk.Client.forMainnet();
    }
    client.setOperator(operator.account, operator.privateKey);
    return client;
};
/**
 * Create a valid hedera Operator
 * @param {Object} account
 * @param {string} privateKey
 * @returns {any} returns hedera client operator
 */
var createClientOperator = function (account, privatekey) {
    var privateKey = sdk.Ed25519PrivateKey.fromString(privatekey);
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
            case 0: return [4 /*yield*/, new sdk.FileCreateTransaction()
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
            case 0: return [4 /*yield*/, new sdk.FileAppendTransaction()
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
                case 0: return [4 /*yield*/, new sdk.ContractCreateTransaction()
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
/**
 * Creates key pairs out of menmonics or phrase
 * @param {string} menmonics
 * @param {Boolean} supportsDerivation (optional)
 * @returns {any} returns receipt
 */
var generateKeysFromMnemonics = function (mnemonics, supportsDerivation) {
    if (supportsDerivation === void 0) { supportsDerivation = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var mnemonicsResult, rootKey, privateKey, publicKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mnemonicsResult = sdk.Mnemonic.fromString(mnemonics);
                    return [4 /*yield*/, sdk.Ed25519PrivateKey.fromMnemonic(mnemonicsResult, "")];
                case 1:
                    rootKey = _a.sent();
                    if (rootKey.supportsDerivation == true && supportsDerivation == true) {
                        privateKey = rootKey.derive(0).toString().substring(32);
                        publicKey = rootKey.derive(0).publicKey.toString().substring(24);
                    }
                    else {
                        privateKey = rootKey.toString().substring(32);
                        publicKey = rootKey.publicKey.toString().substring(24);
                    }
                    privateKey += publicKey;
                    return [2 /*return*/, {
                            mnemonic: mnemonics,
                            privateKey: privateKey,
                            publicKey: publicKey
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
    createContractTx: createContractTx,
    generateKeysFromMnemonics: generateKeysFromMnemonics
};

var myCustomElement$1 = 'account-setter';
var customElementModalTitle$1 = 'Set account';
var tabs = [
    {
        id: "t1",
        title: 'Private Key'
    },
];
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
var selectedTab = 't1';
var renderAccountSetterUI = function (cb) {
    try {
        // Element creation.
        var parentDiv = document.createElement(myCustomElement$1);
        var modalContainer = document.createElement('div');
        var modalHeader = document.createElement('div');
        var modalBody = document.createElement('div');
        var modalBodyTabRow = document.createElement('div');
        var modalBodyWrapper = document.createElement('div');
        var modalFooter = document.createElement('div');
        var closeButton = document.createElement('span');
        var modalTitle = document.createElement('span');
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
        modalBodyTabRow.setAttribute('class', 'modal-tab-row');
        modalBodyWrapper.setAttribute('class', 'modal-body-wrapper');
        modalTitle.setAttribute('class', 'modal-title');
        closeButton.setAttribute('class', 'close-btn');
        cancelButton.setAttribute('class', 'cancel-btn');
        confirmButton.setAttribute('class', 'confirm-btn');
        // Fetching dynamic variables
        closeButton.innerHTML = "&#x2715";
        modalTitle.innerHTML = "" + customElementModalTitle$1;
        cancelButton.innerHTML = 'CANCEL';
        confirmButton.innerHTML = 'VALIDATE & SET';
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
            // @TODO Based on tab do the required operation
            handleConfirmButtonClick();
        };
        // Element Merging and Finalization
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);
        modalContainer.appendChild(modalHeader);
        modalBody.appendChild(modalBodyTabRow);
        modalBody.appendChild(modalBodyWrapper);
        modalContainer.appendChild(modalBody);
        modalFooter.appendChild(cancelButton);
        modalFooter.appendChild(confirmButton);
        modalContainer.appendChild(modalFooter);
        parentDiv.appendChild(modalContainer);
        customElementInjector(parentDiv);
        renderTabRow();
        renderTabContent();
    }
    catch (e) {
        console.error('Error in renderMiddlewareSelectorUI:::', e);
        cb && cb(e);
    }
};
var handleConfirmButtonClick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var network, accountId, accountData, _a, mnemonics, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                network = document.querySelector('.network-input').value;
                accountId = document.querySelector('.account-input').value;
                accountData = {
                    accountId: accountId,
                    network: network,
                    keys: {
                        privateKey: ''
                    }
                };
                _a = selectedTab;
                switch (_a) {
                    case 't1': return [3 /*break*/, 1];
                    case 't2': return [3 /*break*/, 2];
                    case 't3': return [3 /*break*/, 5];
                }
                return [3 /*break*/, 6];
            case 1:
                accountData.keys.privateKey = document.querySelector('.privatekey-input').value;
                return [3 /*break*/, 6];
            case 2:
                mnemonics = document.querySelector('.phrase-input').value;
                if (!mnemonics) return [3 /*break*/, 4];
                _b = accountData;
                return [4 /*yield*/, helper.generateKeysFromMnemonics(mnemonics)];
            case 3:
                _b.keys = _c.sent();
                _c.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5: 
            // @TODO handle keystore
            return [3 /*break*/, 6];
            case 6:
                handleSetAccount(accountData);
                return [2 /*return*/];
        }
    });
}); };
var renderTabRow = function () {
    var tabRow = document.querySelector('.modal-tab-row');
    tabRow.innerHTML = "";
    tabs.forEach(function (t, i) {
        var tabItem = document.createElement('div');
        tabItem.setAttribute('id', "tab-" + i);
        tabItem.setAttribute('class', "tab-item " + (t.id === selectedTab ? 'active' : ''));
        tabItem.innerHTML = t.title;
        tabItem.onclick = function () {
            selectedTab = t.id;
            renderTabRow();
            renderTabContent();
        };
        tabRow.appendChild(tabItem);
    });
};
var renderTabContent = function () {
    var parent = document.querySelector('.modal-body-wrapper');
    parent.innerHTML = "";
    var networkInput = document.createElement('select');
    var accountIdInput = document.createElement('input');
    networkInput.setAttribute('class', 'network-input');
    accountIdInput.setAttribute('class', 'account-input');
    accountIdInput.placeholder = ' 0.0.1234(Account Id)';
    networks.forEach(function (n, i) {
        if (i === 0) {
            var option_1 = document.createElement('option');
            option_1.setAttribute('key', i.toString());
            option_1.innerHTML = 'Choose Network';
            option_1.selected = true;
            option_1.disabled = true;
            networkInput.appendChild(option_1);
        }
        var option = document.createElement('option');
        option.setAttribute('key', (i + 1).toString());
        option.innerHTML = n.title;
        option.value = n.value;
        networkInput.appendChild(option);
    });
    renderLabeledWrappedUI('Network', networkInput, parent);
    renderLabeledWrappedUI('Account Id', accountIdInput, parent);
    if (selectedTab === 't1') {
        var privateInput = document.createElement('input');
        privateInput.setAttribute('class', 'privatekey-input');
        privateInput.placeholder = ' Private Key';
        renderLabeledWrappedUI('Private Key', privateInput, parent);
    }
    else if (selectedTab === 't2') {
        var phraseInput = document.createElement('textarea');
        phraseInput.setAttribute('class', 'phrase-input');
        phraseInput.rows = 4;
        phraseInput.placeholder = ' Private Key';
        renderLabeledWrappedUI('Mnemonics', phraseInput, parent);
    }
};
var renderLabeledWrappedUI = function (labelText, inputElement, targetElement) {
    var inputWrapper = document.createElement('div');
    var label = document.createElement('div');
    inputWrapper.setAttribute('class', 'input-wrapper');
    label.setAttribute('class', 'label-input');
    label.innerHTML = labelText;
    inputElement.classList.add('input-ele');
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

var setAccountUI = function (cb) {
    return new Promise(function (resolve, reject) {
        if (util.checkEnvironment() === 'client') {
            renderAccountSetterUI(function (err, res) {
                // setMiddleware(res.provider);
                cb && cb(err, res);
                err ? reject(err) : resolve(res);
            });
        }
        else {
            var errorString = 'This function not available in this environment, please try setAccount()';
            cb && cb(errorString);
            reject(errorString);
        }
    });
};
var setAccount = function (accountData, cb) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var mnemonics, _a, message, e_1, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    accountData.network = accountData.network ? accountData.network.toLowerCase().trim() : '';
                    if (accountData.network !== 'mainnet' && accountData.network !== 'testnet') {
                        throw 'Please provide a valid network (testnet or mainnet)';
                    }
                    if (accountData.accountId && !common.isAccountIdLike(accountData.accountId)) {
                        throw 'Please provide a valid accountId (0.0.1234)';
                    }
                    if (!((accountData.keys && accountData.keys.privateKey) || accountData.mnemonics)) return [3 /*break*/, 4];
                    if (!(accountData.keys && accountData.keys.privateKey)) return [3 /*break*/, 1];
                    return [3 /*break*/, 3];
                case 1:
                    mnemonics = accountData.mnemonics;
                    if (!mnemonics) return [3 /*break*/, 3];
                    _a = accountData;
                    return [4 /*yield*/, helper.generateKeysFromMnemonics(mnemonics)];
                case 2:
                    _a.keys = _b.sent();
                    _b.label = 3;
                case 3:
                    util.setStoreData(accountData, 'HashAccount');
                    message = 'Account is successfully set';
                    cb && cb(null, message);
                    resolve(message);
                    return [3 /*break*/, 5];
                case 4: throw "Either privateKey or mnemonics should be provided";
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    error = util.getFriendlyErrorObject(e_1);
                    cb && cb(error);
                    reject(error);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};

var setProviderUI = function (cb) {
    return new Promise(function (resolve, reject) {
        if (util.checkEnvironment() === 'client') {
            renderMiddlewareSelectorUI(function (err, res) {
                var response = setProvider(res.provider);
                cb && cb(err, response);
                err ? reject(err) : resolve(response);
            });
        }
        else {
            var errorString = 'This function not available in this environment, please try setProvider()';
            cb && cb(errorString);
            reject(errorString);
        }
    });
};
var setProvider = function (provider, cb) {
    return new Promise(function (resolve, reject) {
        try {
            var env = util.checkEnvironment();
            if (provider === 'hardware') {
                throw 'Hardware provider is not available (Coming Soon!)';
            }
            if (env === 'server' && provider === 'composer') {
                throw 'Cannot set composer as a provider for this environment';
            }
            util.setStoreData(provider, 'provider');
            if (env === 'client' && provider !== 'composer') {
                setAccountUI();
            }
            var message = "Provider is set to " + provider + ", Please also set account details if not done already";
            cb && cb(null, message);
            resolve(message);
        }
        catch (e) {
            var error = util.getFriendlyErrorObject(e);
            cb && cb(error);
            reject(error);
        }
    });
};

/**
 * A function to handle getting account Info based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var accountInfoController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var env, provider, accountId, _a, accountData, account, operator, client, updatedData, response, message, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    env = util.checkEnvironment();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    provider = util.getStoreData('provider');
                    accountId = data.accountId;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 2];
                        case 'software': return [3 /*break*/, 3];
                        case 'composer': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2: 
                //@TODO flow comming soon
                throw "Hardware option for account info comming soon!";
                case 3:
                    accountData = util.getStoreData('HashAccount');
                    account = accountId ? util.getAccountIdObjectFull(accountId) : util.getAccountIdObjectFull(accountData.accountId);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    updatedData = {
                        accountData: accountData,
                        account: account,
                        client: client,
                    };
                    return [4 /*yield*/, accountInfo(updatedData)];
                case 4:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 6];
                case 5:
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-balance");
                    hederaTag.setAttribute("data-accountID", data.accountId || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); });
};
var accountInfo = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var client, account, accountData, balance, network;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = data.client, account = data.account, accountData = data.accountData;
                return [4 /*yield*/, new sdk.AccountBalanceQuery()
                        .setAccountId(account.accountIdLike)
                        .execute(client)];
            case 1:
                balance = _a.sent();
                network = accountData.network || 'Not Set';
                return [2 /*return*/, {
                        accountId: account.accountIdLike,
                        currentNetwork: network,
                        balance: balance.asTinybar().toString()
                    }];
        }
    });
}); };

/**
 * A function to handle crypto transfer based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var cryptoTransferController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var env, provider, recipientList, memo, _a, accountData, account, fromAccount, amount, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    env = util.checkEnvironment();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    provider = util.getStoreData('provider');
                    recipientList = data.recipientList, memo = data.memo;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 2];
                        case 'software': return [3 /*break*/, 3];
                        case 'composer': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2: 
                //@TODO flow comming soon
                throw "Hardware option for crypto comming soon!";
                case 3:
                    accountData = util.getStoreData('HashAccount');
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
                case 4:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 6];
                case 5:
                    extensionid = util.getStoreData('extensionId');
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
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); });
};
var cryptoTransfer = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var transactionId, receipt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('datat:::', data);
                return [4 /*yield*/, new sdk.CryptoTransferTransaction()
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
                console.log('reciept:::', receipt, data);
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
        var env, provider, memo, transactionfee, amount, gasfee, contractId, functionParams, abi, _a, accountData, account, contractIdLike, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    env = util.checkEnvironment();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, transactionfee = data.transactionfee, amount = data.amount, gasfee = data.gasfee, contractId = data.contractId, functionParams = data.functionParams, abi = data.abi;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 2];
                        case 'software': return [3 /*break*/, 3];
                        case 'composer': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2: 
                //@TODO flow comming soon
                throw "Hardware option for contract call comming soon!";
                case 3:
                    accountData = util.getStoreData('HashAccount');
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
                case 4:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 6];
                case 5:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-contract");
                    hederaTag.setAttribute("data-contractid", data.contractId || '');
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-params", data.params ? JSON.stringify(data.params) : '[]');
                    hederaTag.setAttribute("data-abi", JSON.stringify(data.abi) || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-gasfee", data.gasfee || '');
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-amount", data.amount || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
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
                return [4 /*yield*/, new sdk.ContractExecuteTransaction()
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
                if (contractCallRecord && contractCallRecord.receipt && contractCallRecord.receipt.status.code == sdk.Status.Success.code) {
                    finalResult = {
                        status: "success",
                        ok: true,
                        code: 200,
                        message: "",
                        result: []
                    };
                    if (abi[0].outputs && abi[0].outputs.length > 0 && contractCallRecord.getContractExecuteResult() && contractCallRecord.getContractExecuteResult().asBytes().length > 0) {
                        abiCoder = new web3EthAbi.AbiCoder();
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
    GAS_FEE: 10000000,
    EXPIRATION_TIME: 7890000000,
    FILE_SIZE: 0 //given in bytes
};
var FILE_RETRIEVE = {
    TRANSACTION_FEE: 500000000,
    GAS_FEE: 10000000,
};
var TOPIC_CREATE = {
    TRANSACTION_FEE: 200000000,
    GAS_FEE: 10000000,
    AUTORENEW_PERIOD: 0,
};
var TOPIC_UPDATE = {
    TRANSACTION_FEE: 200000000,
    GAS_FEE: 10000000,
    AUTORENEW_PERIOD: 0,
};
var TOPIC_INFO = {
    TRANSACTION_FEE: 200000000,
    GAS_FEE: 10000000,
};
var TOPIC_DELETE = {
    TRANSACTION_FEE: 200000000,
    GAS_FEE: 10000000,
};
var SUBMIT_MESSAGE = {
    TRANSACTION_FEE: 200000000,
    GAS_FEE: 10000000,
};
var defaults = {
    CONTRACT_CALL: CONTRACT_CALL,
    CONTRACT_DEPLOY: CONTRACT_DEPLOY,
    FILE_CREATE: FILE_CREATE,
    FILE_RETRIEVE: FILE_RETRIEVE,
    TOPIC_CREATE: TOPIC_CREATE,
    TOPIC_UPDATE: TOPIC_UPDATE,
    TOPIC_INFO: TOPIC_INFO,
    TOPIC_DELETE: TOPIC_DELETE,
    SUBMIT_MESSAGE: SUBMIT_MESSAGE
};

/**
 * A function to handle contract deploy based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var contractDeployController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var env, provider, memo, transactionfee, amount, gasfee, fileId, expirationTime, bytecode, abi, params, functionParams, _a, accountData, account, fileIdLike, expirationtime, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    env = util.checkEnvironment();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, transactionfee = data.transactionfee, amount = data.amount, gasfee = data.gasfee, fileId = data.fileId, expirationTime = data.expirationTime, bytecode = data.bytecode, abi = data.abi, params = data.params, functionParams = data.functionParams;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 2];
                        case 'software': return [3 /*break*/, 3];
                        case 'composer': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2: 
                //@TODO flow comming soon
                throw "Hardware option for contract deploy comming soon!";
                case 3:
                    accountData = util.getStoreData('HashAccount');
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
                    return [4 /*yield*/, contractDeploy(updatedData)];
                case 4:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 6];
                case 5:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-deploy-contract");
                    hederaTag.setAttribute("data-fileid", data.fileId || '');
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-params", data.params ? JSON.stringify(data.params) : '[]');
                    hederaTag.setAttribute("data-abi", JSON.stringify(data.abi) || '');
                    hederaTag.setAttribute("data-bytecode", data.bytecode || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-gasfee", data.gasfee || '');
                    // @TODO extension not accepting txs fees
                    hederaTag.setAttribute("data-transactionfee", '');
                    hederaTag.setAttribute("data-amount", data.amount || '');
                    hederaTag.setAttribute("data-expirationTime", data.expirationTime || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
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
                if (fileCreateTx.status.code === sdk.Status.Success.code) {
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
                if (contractDeployTx.status.code === sdk.Status.Success.code) {
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
                    if (!(fileReceipt.status.code === sdk.Status.Success.code)) return [3 /*break*/, 8];
                    fileId = fileReceipt._fileId;
                    i = 1;
                    _a.label = 2;
                case 2:
                    if (!(i < numParts)) return [3 /*break*/, 5];
                    partBytes = util.copyBytes(i * FILE_PART_SIZE, FILE_PART_SIZE, contents);
                    return [4 /*yield*/, helper.appendFile(client, fileId, partBytes, txFee)];
                case 3:
                    fileAppendResult = _a.sent();
                    if (fileAppendResult.status.code !== sdk.Status.Success.code) {
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
                    if (fileAppendResult.status.code !== sdk.Status.Success.code) {
                        throw new Error("Error Appending Last Chunks");
                    }
                    _a.label = 8;
                case 8: return [2 /*return*/, fileReceipt];
            }
        });
    });
};

/**
 * A function to handle file create based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var fileCreateController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var env, provider, memo, contents, transactionfee, gasfee, expirationTime, _a, accountData, account, expirationtime, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    env = util.checkEnvironment();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, contents = data.contents, transactionfee = data.transactionfee, gasfee = data.gasfee, expirationTime = data.expirationTime;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 2];
                        case 'software': return [3 /*break*/, 3];
                        case 'composer': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2: 
                //@TODO flow comming soon
                throw "Hardware option for file create comming soon!";
                case 3:
                    accountData = util.getStoreData('HashAccount');
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    expirationtime = Date.now() + expirationTime;
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    updatedData = {
                        memo: memo,
                        contents: contents,
                        account: account,
                        client: client,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                        expirationtime: expirationtime,
                    };
                    return [4 /*yield*/, fileCreate(updatedData)];
                case 4:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 6];
                case 5:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-file-create");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-fileContent", JSON.stringify(data.fileContent) || '');
                    hederaTag.setAttribute("data-fileSize", data.fileSize || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    // @TODO extension not accepting txs fees
                    hederaTag.setAttribute("data-transactionfee", '');
                    hederaTag.setAttribute("data-expirationTime", data.expirationTime || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); });
};
var fileCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, contents, transactionfee, client, expirationtime, FILE_PART_SIZE, numParts, remainder, firstPartBytes, moreContents, fileReceipt, fileId, i, partBytes, fileAppendResult, partBytes, fileAppendResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                memo = data.memo, contents = data.contents, transactionfee = data.transactionfee, client = data.client, expirationtime = data.expirationtime;
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
                return [4 /*yield*/, helper.createFile(client, firstPartBytes, expirationtime, transactionfee, memo)];
            case 1:
                fileReceipt = _a.sent();
                // @INFO If u need transaction Id
                // let transactionId = (fileReceipt as any).transactionId;
                fileReceipt = __assign({}, fileReceipt);
                if (!moreContents) return [3 /*break*/, 7];
                if (!(fileReceipt.status.code === sdk.Status.Success.code)) return [3 /*break*/, 7];
                fileId = fileReceipt._fileId;
                i = 1;
                _a.label = 2;
            case 2:
                if (!(i < numParts)) return [3 /*break*/, 5];
                partBytes = util.copyBytes(i * FILE_PART_SIZE, FILE_PART_SIZE, contents);
                return [4 /*yield*/, helper.appendFile(client, fileId, partBytes, transactionfee)];
            case 3:
                fileAppendResult = _a.sent();
                if (fileAppendResult.status.code !== sdk.Status.Success.code) {
                    throw new Error("Error Appending File");
                }
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                if (!(remainder > 0)) return [3 /*break*/, 7];
                partBytes = util.copyBytes(numParts * FILE_PART_SIZE, remainder, contents);
                return [4 /*yield*/, helper.appendFile(client, fileId, partBytes, transactionfee)];
            case 6:
                fileAppendResult = _a.sent();
                if (fileAppendResult.status.code !== sdk.Status.Success.code) {
                    throw new Error("Error Appending Last Chunks");
                }
                _a.label = 7;
            case 7:
                if (fileReceipt.status.code === sdk.Status.Success.code) {
                    return [2 /*return*/, fileReceipt];
                }
                else {
                    throw fileReceipt.codeName;
                }
        }
    });
}); };

var fileType = require('file-type/browser');
/**
 * A function to handle file retrieve based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var fileRetrieveController = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var env, provider, memo, fileId, transactionfee, gasfee, _a, accountData, account, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    env = util.checkEnvironment();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, fileId = data.fileId, transactionfee = data.transactionfee, gasfee = data.gasfee;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 2];
                        case 'software': return [3 /*break*/, 3];
                        case 'composer': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2: 
                //@TODO flow comming soon
                throw "Hardware option for file retrieve comming soon!";
                case 3:
                    accountData = util.getStoreData('HashAccount');
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    updatedData = {
                        memo: memo,
                        fileId: fileId,
                        account: account,
                        client: client,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                    };
                    return [4 /*yield*/, fileRetrieve(updatedData)];
                case 4:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 6];
                case 5:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-file-retrieve");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-fileId", data.fileId || '');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    // @TODO extension not accepting txs fees
                    hederaTag.setAttribute("data-transactionfee", '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); });
};
var fileRetrieve = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var fileId, transactionfee, client, fileQueryResp, contentAsString, type, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileId = data.fileId, transactionfee = data.transactionfee, client = data.client;
                return [4 /*yield*/, new sdk.FileContentsQuery()
                        .setFileId(fileId)
                        .setMaxQueryPayment(transactionfee)
                        .execute(client)];
            case 1:
                fileQueryResp = _a.sent();
                contentAsString = Buffer.from(fileQueryResp).toString();
                return [4 /*yield*/, fileType.fromBuffer(fileQueryResp)];
            case 2:
                type = _a.sent();
                response = {
                    contents: Array.from(fileQueryResp),
                    contentAsString: contentAsString
                };
                if (type) {
                    response.fileType = type;
                }
                return [2 /*return*/, response];
        }
    });
}); };

/**
 * A function to handle topic create based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var topicCreateController = function (data) {
    var env = util.checkEnvironment();
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, memo, submitKeyList, autoRenewAccount, autoRenewPeriod, transactionfee, gasfee, _a, accountData, account, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, submitKeyList = data.submitKeyList, autoRenewAccount = data.autoRenewAccount, autoRenewPeriod = data.autoRenewPeriod, transactionfee = data.transactionfee, gasfee = data.gasfee;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for topic create comming soon!";
                case 2:
                    accountData = util.getStoreData('HashAccount');
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    updatedData = {
                        memo: memo,
                        submitKeyList: submitKeyList,
                        autoRenewAccount: autoRenewAccount,
                        autoRenewPeriod: autoRenewPeriod,
                        account: account,
                        client: client,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                    };
                    return [4 /*yield*/, topicCreate(updatedData)];
                case 3:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 5];
                case 4:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-topic-create");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-submitkeylist", data.submitKeyList ? JSON.stringify(data.submitKeyList) : '');
                    hederaTag.setAttribute("data-expirationtime", data.expirationTime || '');
                    hederaTag.setAttribute("data-autorenewperiod", data.autoRenewPeriod || '');
                    hederaTag.setAttribute("data-autorenewaccount", data.autoRenewAccount || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var topicCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var client, memo, autoRenewAccount, autoRenewPeriod, submitKeyList, transactionfee, expirationTime, transactionId, keyList, _i, submitKeyList_1, k, transactionReceipt, topicId, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = data.client, memo = data.memo, autoRenewAccount = data.autoRenewAccount, autoRenewPeriod = data.autoRenewPeriod, submitKeyList = data.submitKeyList, transactionfee = data.transactionfee, expirationTime = data.expirationTime;
                return [4 /*yield*/, new sdk.ConsensusTopicCreateTransaction()
                        .setTopicMemo(memo)
                        .setMaxTransactionFee(transactionfee)
                        .setAdminKey(client._operatorPublicKey)
                    // Sets expiry if given
                ];
            case 1:
                transactionId = _a.sent();
                // Sets expiry if given
                if (expirationTime && !isNaN(expirationTime)) {
                    transactionId.setExpirationTime(Date.now() + expirationTime);
                }
                // Sets autoRenewPeriod if given
                if (autoRenewPeriod && !isNaN(autoRenewPeriod)) {
                    transactionId.setAutoRenewPeriod(autoRenewPeriod);
                }
                // Sets autoRenewAccount if given
                if (autoRenewAccount) {
                    transactionId.setAutoRenewAccount(autoRenewAccount);
                }
                if (!(submitKeyList && submitKeyList.length > 0)) return [3 /*break*/, 3];
                keyList = new sdk.KeyList();
                for (_i = 0, submitKeyList_1 = submitKeyList; _i < submitKeyList_1.length; _i++) {
                    k = submitKeyList_1[_i];
                    keyList.add(sdk.Ed25519PublicKey.fromString(k));
                }
                return [4 /*yield*/, transactionId.setSubmitKey(keyList)];
            case 2:
                transactionId = _a.sent();
                _a.label = 3;
            case 3: return [4 /*yield*/, transactionId.execute(client)
                // Fetch transaction reciept
            ];
            case 4:
                // Execution to create topic
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getReceipt(client)
                    // Get the newly generated topic Id
                ];
            case 5:
                transactionReceipt = _a.sent();
                topicId = transactionReceipt.getConsensusTopicId();
                response = ({
                    nodePrecheckcode: transactionReceipt.status.code,
                    receiptStatus: transactionReceipt.status.code,
                    transactionId: transactionId,
                    topicId: topicId
                });
                return [2 /*return*/, response];
        }
    });
}); };

/**
 * A function to handle topic update based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var topicUpdateController = function (data) {
    var env = util.checkEnvironment();
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, memo, submitKeyList, autoRenewPeriod, transactionfee, gasfee, topicId, autoRenewAccount, _a, accountData, account, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, submitKeyList = data.submitKeyList, autoRenewPeriod = data.autoRenewPeriod, transactionfee = data.transactionfee, gasfee = data.gasfee;
                    topicId = data.topicId, autoRenewAccount = data.autoRenewAccount;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for topic update comming soon!";
                case 2:
                    accountData = util.getStoreData('HashAccount');
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    // Converting to Object form
                    topicId = util.getAccountIdLikeToObj(topicId, 'topic');
                    autoRenewAccount = autoRenewAccount ? util.getAccountIdLikeToObj(autoRenewAccount, 'account') : autoRenewAccount;
                    updatedData = {
                        memo: memo,
                        topicId: topicId,
                        submitKeyList: submitKeyList,
                        autoRenewAccount: autoRenewAccount,
                        autoRenewPeriod: autoRenewPeriod,
                        account: account,
                        client: client,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                    };
                    return [4 /*yield*/, topicUpdate(updatedData)];
                case 3:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 5];
                case 4:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-topic-update");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-topicid", data.topicId || '');
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-submitkeylist", data.submitKeyList ? JSON.stringify(data.submitKeyList) : '');
                    hederaTag.setAttribute("data-expirationtime", data.expirationTime || '');
                    hederaTag.setAttribute("data-autorenewperiod", data.autoRenewPeriod || '');
                    hederaTag.setAttribute("data-autorenewaccount", data.autoRenewAccount || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var topicUpdate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var client, topicId, memo, autoRenewAccount, autoRenewPeriod, submitKeyList, expirationTime, id, transactionId, keyList, _i, submitKeyList_1, k, transactionReceipt, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = data.client, topicId = data.topicId, memo = data.memo, autoRenewAccount = data.autoRenewAccount, autoRenewPeriod = data.autoRenewPeriod, submitKeyList = data.submitKeyList, expirationTime = data.expirationTime;
                id = new sdk.ConsensusTopicId(topicId);
                return [4 /*yield*/, new sdk.ConsensusTopicUpdateTransaction()
                        .setTopicId(id)
                        .setAdminKey(client._operatorPublicKey)
                    // Sets memo if given
                ];
            case 1:
                transactionId = _a.sent();
                // Sets memo if given
                if (memo && typeof memo === 'string' && memo.trim()) {
                    transactionId.setTopicMemo(memo);
                }
                // Sets expiry if given
                if (expirationTime && !isNaN(expirationTime)) {
                    transactionId.setExpirationTime(Date.now() + expirationTime);
                }
                // Sets autoRenewPeriod if given
                if (autoRenewPeriod && !isNaN(autoRenewPeriod)) {
                    transactionId.setAutoRenewPeriod(autoRenewPeriod);
                }
                // Sets autoRenewAccount if given
                if (autoRenewAccount) {
                    transactionId.setAutoRenewAccount(autoRenewAccount);
                }
                if (!(submitKeyList && submitKeyList.length > 0)) return [3 /*break*/, 3];
                keyList = new sdk.KeyList();
                for (_i = 0, submitKeyList_1 = submitKeyList; _i < submitKeyList_1.length; _i++) {
                    k = submitKeyList_1[_i];
                    keyList.add(sdk.Ed25519PublicKey.fromString(k));
                }
                return [4 /*yield*/, transactionId.setSubmitKey(keyList)];
            case 2:
                transactionId = _a.sent();
                _a.label = 3;
            case 3: return [4 /*yield*/, transactionId.execute(client)
                // Fetch transaction reciept
            ];
            case 4:
                // Execution to create topic
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getReceipt(client)];
            case 5:
                transactionReceipt = _a.sent();
                response = {
                    nodePrecheckcode: transactionReceipt.status.code,
                    receiptStatus: transactionReceipt.status.code,
                    transactionId: transactionId
                };
                return [2 /*return*/, response];
        }
    });
}); };

/**
 * A function to handle topic info based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var topicInfoController = function (data) {
    var env = util.checkEnvironment();
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, memo, transactionfee, gasfee, topicId, _a, accountData, account, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, transactionfee = data.transactionfee, gasfee = data.gasfee;
                    topicId = data.topicId;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for topic info comming soon!";
                case 2:
                    accountData = util.getStoreData('HashAccount');
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    // Converting to Object form
                    topicId = util.getAccountIdLikeToObj(topicId, 'topic');
                    updatedData = {
                        memo: memo,
                        topicId: topicId,
                        account: account,
                        client: client,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                    };
                    return [4 /*yield*/, topicInfo(updatedData)];
                case 3:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 5];
                case 4:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-topic-info");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-topicid", data.topicId || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var topicInfo = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var client, topicId, id, topicInfo, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = data.client, topicId = data.topicId;
                id = new sdk.ConsensusTopicId(topicId);
                return [4 /*yield*/, new sdk.ConsensusTopicInfoQuery()
                        .setTopicId(id)
                        .execute(client)];
            case 1:
                topicInfo = _a.sent();
                response = {
                    topicInfo: topicInfo
                };
                return [2 /*return*/, response];
        }
    });
}); };

/**
 * A function to handle topic delete based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var topicDeleteController = function (data) {
    var env = util.checkEnvironment();
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, memo, transactionfee, gasfee, topicId, _a, accountData, account, operator, client, updatedData, response, message, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, transactionfee = data.transactionfee, gasfee = data.gasfee;
                    topicId = data.topicId;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for topic delete comming soon!";
                case 2:
                    accountData = util.getStoreData('HashAccount');
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    // Converting to Object form
                    topicId = util.getAccountIdLikeToObj(topicId, 'topic');
                    updatedData = {
                        memo: memo,
                        topicId: topicId,
                        account: account,
                        client: client,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                    };
                    return [4 /*yield*/, topicDelete(updatedData)];
                case 3:
                    response = _b.sent();
                    message = { res: response, type: 'success' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    resolve(message);
                    return [3 /*break*/, 5];
                case 4:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-topic-delete");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-topicid", data.topicId || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var topicDelete = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var client, topicId, id, transactionId, transactionReceipt, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = data.client, topicId = data.topicId;
                id = new sdk.ConsensusTopicId(topicId);
                return [4 /*yield*/, new sdk.ConsensusTopicDeleteTransaction()
                        .setTopicId(id)
                        .execute(client)
                    // Fetch transaction reciept
                ];
            case 1:
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getReceipt(client)];
            case 2:
                transactionReceipt = _a.sent();
                response = {
                    nodePrecheckcode: transactionReceipt.status.code,
                    receiptStatus: transactionReceipt.status.code,
                    transactionId: transactionId
                };
                return [2 /*return*/, response];
        }
    });
}); };

/**
 * A function to handle submit message based on type of the provider;
 * @param {Object} data
 * @returns {any} returns response of txs success if success or throws error
 */
var submitMessageController = function (data) {
    var env = util.checkEnvironment();
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var provider, memo, transactionfee, gasfee, message, topicId, _a, accountData, account, operator, client, updatedData, response, messageI, extensionid, domBody, hederaTag, e_1, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    provider = util.getStoreData('provider');
                    memo = data.memo, transactionfee = data.transactionfee, gasfee = data.gasfee, message = data.message;
                    topicId = data.topicId;
                    _a = provider;
                    switch (_a) {
                        case 'hardware': return [3 /*break*/, 1];
                        case 'software': return [3 /*break*/, 2];
                        case 'composer': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1: 
                //@TODO flow comming soon
                throw "Hardware option for submit message comming soon!";
                case 2:
                    accountData = util.getStoreData('HashAccount');
                    account = util.getAccountIdObjectFull(accountData.accountId);
                    operator = helper.createClientOperator(account.accountIdObject, accountData.keys.privateKey);
                    client = helper.createHederaClient(operator, accountData.network);
                    // Converting to Object form
                    topicId = util.getAccountIdLikeToObj(topicId, 'topic');
                    updatedData = {
                        memo: memo,
                        topicId: topicId,
                        message: message,
                        account: account,
                        client: client,
                        transactionfee: transactionfee,
                        gasfee: gasfee,
                    };
                    return [4 /*yield*/, submitMessage(updatedData)];
                case 3:
                    response = _b.sent();
                    messageI = { res: response, type: 'success' };
                    window.postMessage(messageI, window.location.origin);
                    resolve(message);
                    return [3 /*break*/, 5];
                case 4:
                    extensionid = util.getStoreData('extensionId');
                    domBody = document.getElementsByTagName('body')[0];
                    hederaTag = document.createElement("hedera-message-submit");
                    hederaTag.setAttribute("data-memo", data.memo || ' ');
                    hederaTag.setAttribute("data-extensionid", extensionid);
                    hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
                    hederaTag.setAttribute("data-topicid", data.topicId || '');
                    hederaTag.setAttribute("data-message", data.message || '');
                    domBody.appendChild(hederaTag);
                    resolve(data);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    message = { res: e_1, type: 'deny' };
                    if (env === 'client') {
                        window.postMessage(message, window.location.origin);
                    }
                    reject(message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
};
var submitMessage = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var client, topicId, message, id, transactionId, transactionReceipt, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = data.client, topicId = data.topicId, message = data.message;
                id = new sdk.ConsensusTopicId(topicId);
                return [4 /*yield*/, new sdk.ConsensusSubmitMessageTransaction()
                        .setTopicId(id)
                        .setMessage(message)
                        // .sign(operatorPrivateKey) // Must sign by the topic's submitKey
                        .execute(client)
                    // Fetch transaction reciept
                ];
            case 1:
                transactionId = _a.sent();
                return [4 /*yield*/, transactionId.getReceipt(client)];
            case 2:
                transactionReceipt = _a.sent();
                response = {
                    nodePrecheckcode: transactionReceipt.status.code,
                    receiptStatus: transactionReceipt.status.code,
                    transactionId: transactionId
                };
                return [2 /*return*/, response];
        }
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var accountId;
    return __generator(this, function (_a) {
        try {
            accountId = data && data.accountID ? common.isAccountIdLike(data.accountID) : '';
            if (accountId === false) {
                throw ('Not a valid account id');
            }
            // Returning whatever seems to be necessary
            return [2 /*return*/, ({
                    accountId: accountId
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$1 = function (data) {
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
var validate$2 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
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
var validate$3 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
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

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$4 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, contents, fileSize, transactionfee, gasfee, expirationTime;
    return __generator(this, function (_a) {
        try {
            // Something is wrong with the data object, return false
            if (!data) {
                //@TODO make error constants
                throw 'Data is undefined';
            }
            memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo) > 100) {
                throw 'Memo size cannot exceed 100 bytes';
            }
            contents = common.validateArrayList(data.fileContent);
            // @TODO may be we can check is its uint8array convertable if needed
            contents = contents ? new Uint8Array(contents) : contents;
            if (contents === false) {
                throw 'Not valid File Contents';
            }
            fileSize = data.fileSize ? common.isNumber(data.fileSize) : defaults.FILE_CREATE.FILE_SIZE;
            if (fileSize === false) {
                throw 'Not valid File Size';
            }
            transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) : defaults.FILE_CREATE.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw 'Not valid Transaction Fee';
            }
            gasfee = data.gasfee ? common.isNumber(data.gasfee) : defaults.FILE_CREATE.GAS_FEE;
            if (gasfee === false) {
                throw 'Not valid Gas Fee';
            }
            expirationTime = data.expirationtime ? common.isNumber(data.expirationtime) : defaults.FILE_CREATE.EXPIRATION_TIME;
            if (expirationTime === false) {
                throw 'Not valid Expiration Time';
            }
            // Returning whatever seems to be necessary
            return [2 /*return*/, ({
                    memo: memo,
                    fileSize: fileSize,
                    fileContent: data.fileContent,
                    contents: contents,
                    transactionfee: transactionfee,
                    expirationTime: expirationTime,
                    gasfee: gasfee,
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$5 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, fileId, transactionfee, gasfee;
    return __generator(this, function (_a) {
        try {
            // Something is wrong with the data object, return false
            if (!data) {
                //@TODO make error constants
                throw 'Data is undefined';
            }
            memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo) > 100) {
                throw 'Memo size cannot exceed 100 bytes';
            }
            fileId = data.fileId ? common.isAccountIdLike(data.fileId) : '';
            if (fileId === false) {
                throw 'Not a valid file id';
            }
            transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) : defaults.FILE_RETRIEVE.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw 'Not valid Transaction Fee';
            }
            gasfee = data.gasfee ? common.isNumber(data.gasfee) : defaults.FILE_RETRIEVE.GAS_FEE;
            if (gasfee === false) {
                throw 'Not valid Gas Fee';
            }
            // Returning whatever seems to be necessary
            return [2 /*return*/, ({
                    memo: memo,
                    fileId: fileId,
                    transactionfee: transactionfee,
                    gasfee: gasfee,
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$6 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, submitKeyList, transactionfee, gasfee, autoRenewAccount, autoRenewPeriod;
    return __generator(this, function (_a) {
        try {
            // Something is wrong with the data object, return false
            if (!data) {
                throw 'Data is undefined';
            }
            memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo) > 100) {
                throw 'Memo size cannot exceed 100 bytes';
            }
            submitKeyList = data.submitKeyList ? common.validateArrayList(data.submitKeyList) : [];
            //@TODO In-depth validation of public keys can be done
            if (submitKeyList === false) {
                throw ('Not a valid submitKeyList');
            }
            transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) : defaults.CONTRACT_CALL.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw ('Not valid Transaction Fee');
            }
            gasfee = data.gasfee ? common.isNumber(data.gasfee) : defaults.CONTRACT_CALL.GAS_FEE;
            if (gasfee === false) {
                throw ('Not valid Gas Fee');
            }
            autoRenewAccount = data.autoRenewAccount ? common.isAccountIdLike(data.autoRenewAccount) : '';
            if (autoRenewAccount === false) {
                throw ('Not a valid auto renew account id');
            }
            autoRenewPeriod = data.autoRenewPeriod ? common.isNumber(data.autoRenewPeriod) : defaults.TOPIC_CREATE.AUTORENEW_PERIOD;
            if (autoRenewPeriod === false) {
                throw 'Not valid Auto Renew Period';
            }
            // Returning whatever seems to be necessary
            return [2 /*return*/, ({
                    memo: memo,
                    submitKeyList: submitKeyList,
                    autoRenewAccount: autoRenewAccount,
                    autoRenewPeriod: autoRenewPeriod,
                    transactionfee: transactionfee,
                    gasfee: gasfee,
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$7 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, topicId, submitKeyList, transactionfee, gasfee, autoRenewAccount, autoRenewPeriod;
    return __generator(this, function (_a) {
        try {
            // Something is wrong with the data object, return false
            if (!data) {
                throw 'Data is undefined';
            }
            memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo) > 100) {
                throw 'Memo size cannot exceed 100 bytes';
            }
            topicId = common.isAccountIdLike(data.topicId);
            if (topicId === false) {
                throw ('Not a valid topic id');
            }
            submitKeyList = data.submitKeyList ? common.validateArrayList(data.submitKeyList) : [];
            //@TODO In-depth validation of public keys can be done
            if (submitKeyList === false) {
                throw ('Not a valid submitKeyList');
            }
            transactionfee = data.transactionfee ? common.isNumber(data.transactionfee) : defaults.CONTRACT_CALL.TRANSACTION_FEE;
            if (transactionfee === false) {
                throw ('Not valid Transaction Fee');
            }
            gasfee = data.gasfee ? common.isNumber(data.gasfee) : defaults.CONTRACT_CALL.GAS_FEE;
            if (gasfee === false) {
                throw ('Not valid Gas Fee');
            }
            autoRenewAccount = data.autoRenewAccount ? common.isAccountIdLike(data.autoRenewAccount) : '';
            if (autoRenewAccount === false) {
                throw ('Not a valid auto renew account id');
            }
            autoRenewPeriod = data.autoRenewPeriod ? common.isNumber(data.autoRenewPeriod) : defaults.TOPIC_CREATE.AUTORENEW_PERIOD;
            if (autoRenewPeriod === false) {
                throw 'Not valid Auto Renew Period';
            }
            // Returning whatever seems to be necessary
            return [2 /*return*/, ({
                    memo: memo,
                    topicId: topicId,
                    submitKeyList: submitKeyList,
                    autoRenewAccount: autoRenewAccount,
                    autoRenewPeriod: autoRenewPeriod,
                    transactionfee: transactionfee,
                    gasfee: gasfee,
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$8 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, topicId, transactionfee, gasfee;
    return __generator(this, function (_a) {
        try {
            // Something is wrong with the data object, return false
            if (!data) {
                throw 'Data is undefined';
            }
            memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo) > 100) {
                throw 'Memo size cannot exceed 100 bytes';
            }
            topicId = common.isAccountIdLike(data.topicId);
            if (topicId === false) {
                throw ('Not a valid topic id');
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
                    topicId: topicId,
                    transactionfee: transactionfee,
                    gasfee: gasfee,
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$9 = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, topicId, transactionfee, gasfee;
    return __generator(this, function (_a) {
        try {
            // Something is wrong with the data object, return false
            if (!data) {
                throw 'Data is undefined';
            }
            memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo) > 100) {
                throw 'Memo size cannot exceed 100 bytes';
            }
            topicId = common.isAccountIdLike(data.topicId);
            if (topicId === false) {
                throw ('Not a valid topic id');
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
                    topicId: topicId,
                    transactionfee: transactionfee,
                    gasfee: gasfee,
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
var validate$a = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var memo, message, topicId, transactionfee, gasfee;
    return __generator(this, function (_a) {
        try {
            // Something is wrong with the data object, return false
            if (!data) {
                throw 'Data is undefined';
            }
            memo = common.isString(data.memo) || '';
            if (util.stringToBytesSize(memo) > 100) {
                throw 'Memo size cannot exceed 100 bytes';
            }
            message = common.isString(data.message);
            message = message && util.stringToBytesSize(message) < 4000 ? message : false;
            if (message === false) {
                throw 'Message size should be between 1-4kb';
            }
            topicId = common.isAccountIdLike(data.topicId);
            if (topicId === false) {
                throw ('Not a valid topic id');
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
                    message: message,
                    topicId: topicId,
                    transactionfee: transactionfee,
                    gasfee: gasfee,
                })];
        }
        catch (e) {
            throw e;
        }
        return [2 /*return*/];
    });
}); };

// Exports validation as one module for the ease to use it
var validateService = function (data, type) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 23, , 24]);
                _a = type;
                switch (_a) {
                    case 'account-info': return [3 /*break*/, 1];
                    case 'crypto-transfer': return [3 /*break*/, 2];
                    case 'contract-call': return [3 /*break*/, 3];
                    case 'contract-deploy': return [3 /*break*/, 5];
                    case 'file-create': return [3 /*break*/, 7];
                    case 'file-retrieve': return [3 /*break*/, 9];
                    case 'topic-create': return [3 /*break*/, 11];
                    case 'topic-update': return [3 /*break*/, 13];
                    case 'topic-info': return [3 /*break*/, 15];
                    case 'topic-delete': return [3 /*break*/, 17];
                    case 'submit-message': return [3 /*break*/, 19];
                }
                return [3 /*break*/, 21];
            case 1: return [2 /*return*/, validate(data)];
            case 2: return [2 /*return*/, validate$1(data)];
            case 3: return [4 /*yield*/, validate$2(data)];
            case 4: return [2 /*return*/, _b.sent()];
            case 5: return [4 /*yield*/, validate$3(data)];
            case 6: return [2 /*return*/, _b.sent()];
            case 7: return [4 /*yield*/, validate$4(data)];
            case 8: return [2 /*return*/, _b.sent()];
            case 9: return [4 /*yield*/, validate$5(data)];
            case 10: return [2 /*return*/, _b.sent()];
            case 11: return [4 /*yield*/, validate$6(data)];
            case 12: return [2 /*return*/, _b.sent()];
            case 13: return [4 /*yield*/, validate$7(data)];
            case 14: return [2 /*return*/, _b.sent()];
            case 15: return [4 /*yield*/, validate$8(data)];
            case 16: return [2 /*return*/, _b.sent()];
            case 17: return [4 /*yield*/, validate$9(data)];
            case 18: return [2 /*return*/, _b.sent()];
            case 19: return [4 /*yield*/, validate$a(data)];
            case 20: return [2 /*return*/, _b.sent()];
            case 21: throw "No service found!";
            case 22: return [3 /*break*/, 24];
            case 23:
                e_1 = _b.sent();
                throw e_1;
            case 24: return [2 /*return*/];
        }
    });
}); };

var _callback = null;
var _resolve = null;
var _reject = null;
/**
 * triggers exposed check balance and account details call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerCheckBalance = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_1, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'account-info')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, accountInfoController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    err = util.getFriendlyErrorObject(error_1);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed crypto service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerCryptoTransfer = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_2, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'crypto-transfer')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, cryptoTransferController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    err = util.getFriendlyErrorObject(error_2);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
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
        var updatedData, res, error_3, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'contract-call')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, contractCallController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    err = util.getFriendlyErrorObject(error_3);
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
        var updatedData, res, error_4, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'contract-deploy')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, contractDeployController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    err = util.getFriendlyErrorObject(error_4);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed file create service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerFileCreate = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_5, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'file-create')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, fileCreateController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    err = util.getFriendlyErrorObject(error_5);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed file retrieve service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerFileRetrieve = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_6, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'file-retrieve')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, fileRetrieveController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    err = util.getFriendlyErrorObject(error_6);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed topic create service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerTopicCreate = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_7, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'topic-create')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, topicCreateController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    err = util.getFriendlyErrorObject(error_7);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed topic update service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerTopicUpdate = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_8, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'topic-update')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, topicUpdateController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    err = util.getFriendlyErrorObject(error_8);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed topic info service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerTopicInfo = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_9, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'topic-info')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, topicInfoController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    err = util.getFriendlyErrorObject(error_9);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed topic delete service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerTopicDelete = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_10, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    checkPrerequisites();
                    return [4 /*yield*/, validateService(data, 'topic-delete')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, topicDeleteController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _a.sent();
                    err = util.getFriendlyErrorObject(error_10);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * triggers exposed submit message service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
var triggerSubmitMessage = function (data, callback) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedData, res, error_11, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _callback = callback;
                    _resolve = resolve;
                    _reject = reject;
                    return [4 /*yield*/, validateService(data, 'submit-message')];
                case 1:
                    updatedData = _a.sent();
                    return [4 /*yield*/, submitMessageController(updatedData)];
                case 2:
                    res = _a.sent();
                    handleResponse(res);
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    err = util.getFriendlyErrorObject(error_11);
                    callback && callback(err);
                    reject(err);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
var handleResponse = function (data) {
    if (data.type.includes('deny')) {
        _callback && _callback(data.res, null);
        _reject && _reject(data.res);
    }
    else {
        var rectifiedResponse = util.convertIfArray(data.res);
        _callback && _callback(null, rectifiedResponse);
        _resolve && _resolve(data.res);
    }
};
/**
 * Accepts message event and returns to promise and callback
 * @param {MessageEvent} event
 */
var receiveMessage = function (event) {
    if (event.data.type && event.origin === window.location.origin) {
        handleResponse(event.data);
    }
};
var checkPrerequisites = function () {
    if (!util.getStoreData('provider')) {
        throw 'Please set your provider (i.e hardware,composer or software)';
    }
    else if (util.getStoreData('provider') !== 'composer') {
        if (!util.getStoreData('HashAccount')) {
            throw 'Please set your account details (network, private key and account id)';
        }
        else if (!util.getStoreData('HashAccount').network) {
            throw 'Please set your network (i.e mainnet or testnet)';
        }
        else if (!util.getStoreData('HashAccount').accountId) {
            throw 'Please set your accountId (0.0.1234)';
        }
        else if (!util.getStoreData('HashAccount').keys) {
            if (!util.getStoreData('HashAccount').keys.privateKey) {
                throw 'Please set your private key';
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
};
/**
 * 'message' event listener to catch messages from composer or software responses
 */
if (util.checkEnvironment() === 'client') {
    window.addEventListener("message", receiveMessage, false);
}

// Exposed Functions
var exports$1 = {
    sum: sum,
    setProvider: setProvider,
    setProviderUI: setProviderUI,
    setAccount: setAccount,
    setAccountUI: setAccountUI,
    triggerCheckBalance: triggerCheckBalance,
    triggerCryptoTransfer: triggerCryptoTransfer,
    triggerSmartContract: triggerSmartContract,
    deploySmartContract: deploySmartContract,
    triggerFileCreate: triggerFileCreate,
    triggerFileRetrieve: triggerFileRetrieve,
    triggerTopicCreate: triggerTopicCreate,
    triggerTopicUpdate: triggerTopicUpdate,
    triggerTopicInfo: triggerTopicInfo,
    triggerTopicDelete: triggerTopicDelete,
    triggerSubmitMessage: triggerSubmitMessage,
};
// Exposing inject to window object
if (util.checkEnvironment() === 'server') {
    global.hash = __assign({}, exports$1);
}
else {
    window.hash = __assign({}, exports$1);
}
// Exposing function using default
if (util.checkEnvironment() === 'server') {
    module.exports = __assign({}, exports$1);
}
var index = __assign({}, exports$1);

exports.default = index;
//# sourceMappingURL=index.js.map
