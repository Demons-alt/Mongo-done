const Success = (res, data, transactionId) => {

    const response = {
        status : true,
        code : 200,
        transactionId : transactionId,
        data : data
    }
    res.json(response)
}

const Failed = (res, data, transactionId) => {

    const response = {
        status : false,
        code : 417,
        transactionId : transactionId,
        data : data
    }
    res.json(response)
}

const flexibelRes = (res, status, data, code,transactionId) => {
    const response = {
        status : status,
        code : code,
        data : data,
        transactionId : transactionId,
    }
    res.json(response)
}


module.exports = {
    Success,
    Failed,
    flexibelRes
}