export declare const common: {
    isString: (s: any) => string | false;
    isNumber: (n: any) => number | false;
    isAccountIdLike: (id: any) => string | false;
    isHederaId: (id: any) => string | Object | Boolean;
    validateArrayList: (arr: any) => any;
    validateRecipientList: (recipientList: any) => any;
    isAccountIdObject: (id: any) => any;
    isAccountIdAddress: (id: string) => boolean;
    isAddressArray: (addArr: any) => false | string[];
};
