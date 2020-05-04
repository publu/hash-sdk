export interface IOperator {
    privateKey: string;
    account: {
        shard: number;
        realm: number;
        account: number;
    };
}
export interface IAccountIdLike {
    shard: number;
    realm: number;
    account: number;
}
export interface IAccountDataLike {
    accountId: string;
    network: string;
    keys?: {
        privateKey: string;
        publicKey?: string;
    };
    mnemonics?: string;
}
