import { Client } from '@hashgraph/sdk';
import { Ed25519PrivateKey } from '@hashgraph/sdk';
import { IAccountIdLike, IOperator } from '../interface';
export declare const util: {
    stringToBytes: (s: string) => Uint8Array;
    stringToBytesSize: (s: string) => number;
    getAccountIdObjectFull: (id: string | number | Object, type?: string) => Object;
    getAccountIdLikeToObj: (id: string, type?: string) => object;
    getAccountObjToIdLike: (id: Object) => string;
    getFriendlyErrorObject: (e: any) => Object;
    createHederaClient: (operator: IOperator, network: string) => Client;
    createClientOperator: (account: IAccountIdLike, privatekey: string) => {
        account: IAccountIdLike;
        privateKey: Ed25519PrivateKey;
    };
    sumFromRecipientList: (recipientList: any) => number;
};
