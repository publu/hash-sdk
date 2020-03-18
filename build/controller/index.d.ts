/**
 * triggers exposed crypto service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerCryptoTransfer: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed contract call service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerSmartContract: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed contract deploy service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const deploySmartContract: (data: any, callback?: Function | undefined) => Promise<unknown>;
