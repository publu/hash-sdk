const CONTRACT_CALL ={
    TRANSACTION_FEE:700000000, //given in Tinybars,
    GAS_FEE:10000000 //given in Tinybars
}

const CONTRACT_DEPLOY ={
    TRANSACTION_FEE:2500000000, //given in Tinybars,
    GAS_FEE:10000000, //given in Tinybars
    EXPIRATION_TIME:7890000000, //given in Milliseconds
    AUTORENEW_PERIOD:7890000 //given in Milliseconds
}

const FILE_CREATE ={
    TRANSACTION_FEE:500000000, //given in Tinybars,
    GAS_FEE:10000000 //given in Tinybars
}

export const defaults ={
    CONTRACT_CALL,
    CONTRACT_DEPLOY,
    FILE_CREATE
}