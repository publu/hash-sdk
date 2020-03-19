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
    GAS_FEE:10000000, //given in Tinybars
    EXPIRATION_TIME:7890000000, //given in Milliseconds
    FILE_SIZE:0 //given in bytes
}

const FILE_RETRIEVE ={
    TRANSACTION_FEE:500000000, //given in Tinybars,
    GAS_FEE:10000000, //given in Tinybars
}

const TOPIC_CREATE ={
    TRANSACTION_FEE:200000000, //given in Tinybars,
    GAS_FEE:10000000, //given in Tinybars
    AUTORENEW_PERIOD:0, //given in Milliseconds
}

const TOPIC_UPDATE ={
    TRANSACTION_FEE:200000000, //given in Tinybars,
    GAS_FEE:10000000, //given in Tinybars
    AUTORENEW_PERIOD:0, //given in Milliseconds
}

const TOPIC_INFO ={
    TRANSACTION_FEE:200000000, //given in Tinybars,
    GAS_FEE:10000000, //given in Tinybars
}

const TOPIC_DELETE ={
    TRANSACTION_FEE:200000000, //given in Tinybars,
    GAS_FEE:10000000, //given in Tinybars
}

const SUBMIT_MESSAGE ={
    TRANSACTION_FEE:200000000, //given in Tinybars,
    GAS_FEE:10000000, //given in Tinybars
}

export const defaults ={
    CONTRACT_CALL,
    CONTRACT_DEPLOY,
    FILE_CREATE,
    FILE_RETRIEVE,
    TOPIC_CREATE,
    TOPIC_UPDATE,
    TOPIC_INFO,
    TOPIC_DELETE,
    SUBMIT_MESSAGE
}