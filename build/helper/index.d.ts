import { Client, Ed25519PrivateKey, ContractFunctionParams } from '@hashgraph/sdk';
import { IAccountIdLike, IOperator } from '../interface';
export declare const helper: {
    createClientOperator: (account: IAccountIdLike, privatekey: string) => {
        account: IAccountIdLike;
        privateKey: Ed25519PrivateKey;
    };
    createHederaClient: (operator: IOperator, network: string) => Client;
    getContractFunctionParams: (abi: any, params: any) => ContractFunctionParams;
    createFile: (client: any, firstPartBytes: any, expirationTime: any, txFee: number, memo: string) => Promise<{
        status: import("@hashgraph/sdk").Status;
    }>;
    appendFile: (client: any, fileId: any, contents: any, txFee: number) => Promise<{
        status: import("@hashgraph/sdk").Status;
    }>;
    createContractTx: (client: any, fileId: any, constructorParams: any, amount: number | undefined, gasFee: number, txFee: number, memo: string, autoRenewPeriod: any) => Promise<{
        receipt: {
            status: import("@hashgraph/sdk").Status;
        };
        transactionId: import("@hashgraph/sdk").TransactionId;
    }>;
    generateKeysFromMnemonics: (mnemonics: string, supportsDerivation?: boolean) => Promise<{
        mnemonic: string;
        privateKey: string;
        publicKey: string;
    }>;
};
