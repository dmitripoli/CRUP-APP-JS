'use strict';

const response = require('./const.config.json').response;
const sendResponse = function(res, responseData, next) {
    res.locals.response = {
        status: response.status.ok,
        message: response.successMessage,
        data: responseData,
    };
    next();
};

module.exports = {
    sendResponse,
};
