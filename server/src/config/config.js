'use strict';
const config = {};
config.server = {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 8080,
};
config.db = {
    url: process.env.DATABASE_URL,
};

module.exports = config;
