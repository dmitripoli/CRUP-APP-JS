'use strict';
require('dotenv').config({ path: '../.env' }); // eslint-disable-line global-require
require('dotenv');
const express = require('express');
const db = require('./src/config/db');
const server = require('./src/config/server');
const config = require('./src/config/config');
const router = require('./src/routes/router');
const errorHandlerConfig = require('./src/middleware/error.middleware');
const responseHandlerConfig = require('./src/middleware/response.middleware');
const bunyanLogger = require('./src/logger/bunyan.logger');
const loggingMiddleWare = require('./src/middleware/logging.middleware');
const security = require('./src/middleware/security/security.middleware');
const app = express();

/*
	DB CONNECTION
	** Change the config file in case of testing
*/
db.connect(config);
// APP CONFIG
server.config(app);
// ADDING SECURITY MIDDLEWARE
security.initSecurityMiddleware(app);
// ROUTE CONFIG
router.route(app);
// LOGGING MIDDLEWARE
loggingMiddleWare.initLoggingMiddleWare(app);
// RESPONSE MIDDLEWARE
responseHandlerConfig.initResponseHandler(app);
// ERROR MIDDLEWARE
errorHandlerConfig.initErrorHandler(app);
// START SERVER
app.set('port', config.server.port);
app.listen(app.get('port'), () => {
    bunyanLogger.logInfo(`"Server listening on "${process.pid}" and port "${app.get('port')}`);
});
app.timeout = 6000000;
process.on('uncaughtException', err => {
    bunyanLogger.logError(err, 'Unhandled Exception');
});

process.on('uncaughtRejection', (err, promise) => {
    bunyanLogger.logError(err, 'Unhandled Rejection');
});

exports = module.exports = app;
