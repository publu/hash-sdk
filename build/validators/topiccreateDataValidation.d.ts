/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
declare const validate: (data: any) => Promise<{
    memo: string;
    submitKeyList: any;
    autoRenewAccount: string;
    autoRenewPeriod: number;
    transactionfee: number;
    gasfee: number;
}>;
export default validate;
