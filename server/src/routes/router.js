'use strict';
const contactRoutes = require('../components/contact/contact.routes');
const express = require('express');
const path = require('path');
const mime = require('mime-types');
const router = express.Router();
exports.route = app => {
    //   Point static path to dist
    app.use(
        express.static(path.join(__dirname, '../../build'), {
            setHeaders: (res, path) => {
                if (mime.lookup(path) !== 'text/html') {
                    res.setHeader('Cache-Control', 'public, max-age=86400, immutable');
                }
            },
        })
    );

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../build/index.html'));
    });
    app.use('/contact', contactRoutes);
    app.use('/', express.Router());
};
