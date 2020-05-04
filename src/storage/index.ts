
export const Account = (function () {
    var instance:any;

    function initAccount() {
        var accountData = {};
        return accountData;
    }

    function setAccount(accountData:any) {
        instance.accountData = accountData;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = initAccount();
            }
            return instance;
        },
        setAccount: function (accountData:any) {
            if (!instance) {
                instance = initAccount();
            }
            setAccount(accountData)
            return instance;
        }
    };
})();
