/**
 * Does the needed validation and rectification of data before it is passed on to the service
 * @param {Object} data refers to value passed by function caller
 * @returns {function} callback
*/
declare const validate: (data: any) => {
    memo: string;
    recipientList: any;
};
export default validate;
