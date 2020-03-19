export declare const validateService: (data: any, type: string) => Promise<{
    memo: string;
    recipientList: any;
} | {
    memo: string;
    contractId: string;
    abi: any;
    params: any;
    amount: number;
    transactionfee: number;
    gasfee: number;
    functionParams: import("@hashgraph/sdk").ContractFunctionParams;
} | {
    memo: string;
    fileSize: number;
    fileContent: any;
    contents: any;
    transactionfee: number;
    expirationTime: number;
    gasfee: number;
} | {
    memo: string;
    fileId: string;
    transactionfee: number;
    gasfee: number;
} | {
    memo: string;
    submitKeyList: any;
    autoRenewAccount: string;
    autoRenewPeriod: number;
    transactionfee: number;
    gasfee: number;
} | {
    memo: string;
    topicId: string;
    transactionfee: number;
    gasfee: number;
}>;
