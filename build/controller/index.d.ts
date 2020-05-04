/**
 * triggers exposed check balance and account details call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerCheckBalance: (data: any, callback?: Function | undefined) => Promise<unknown>;
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
/**
 * triggers exposed file create service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerFileCreate: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed file retrieve service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerFileRetrieve: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed topic create service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerTopicCreate: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed topic update service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerTopicUpdate: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed topic info service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerTopicInfo: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed topic delete service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerTopicDelete: (data: any, callback?: Function | undefined) => Promise<unknown>;
/**
 * triggers exposed submit message service call
 * @param {Object} data
 * @returns {any} returns response of success if success or throws error
 */
export declare const triggerSubmitMessage: (data: any, callback?: Function | undefined) => Promise<unknown>;
