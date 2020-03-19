declare const _default: {
    sum: (a: number, b: number) => number;
    selectProvider: (cb?: Function | undefined) => Promise<unknown>;
    setAccount: (cb?: Function | undefined) => Promise<unknown>;
    triggerCryptoTransfer: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerSmartContract: (data: any, callback?: Function | undefined) => Promise<unknown>;
    deploySmartContract: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerFileCreate: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerFileRetrieve: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerTopicCreate: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerTopicUpdate: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerTopicInfo: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerTopicDelete: (data: any, callback?: Function | undefined) => Promise<unknown>;
    triggerSubmitMessage: (data: any, callback?: Function | undefined) => Promise<unknown>;
};
export default _default;
