/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
declare const validate: (data: any) => Promise<{
    memo: string;
    fileId: string;
    abi: any;
    params: any;
    amount: number;
    transactionfee: number;
    expirationTime: number;
    gasfee: number;
    bytecode: string;
    functionParams: import("@hashgraph/sdk").ContractFunctionParams;
}>;
export default validate;
