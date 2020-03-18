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
