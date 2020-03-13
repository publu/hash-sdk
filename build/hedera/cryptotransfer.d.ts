export declare const cryptoTransfer: (data: any) => void;
export declare const doCryptoTransfer: (data: any) => Promise<{
    transactionId: string;
    receipt: {
        status: import("@hashgraph/sdk").Status;
    };
}>;
