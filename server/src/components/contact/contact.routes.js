const express = require('express');
const router = express.Router();
const ContactApiController = require('./contact.api.controller');
const contactApiController = new ContactApiController();

router
    .post('/create', contactApiController.create.bind(contactApiController))
    .put('/update/:id', contactApiController.update.bind(contactApiController))
    .get('/get/', contactApiController.get.bind(contactApiController))
    .get('/get/:id', contactApiController.get.bind(contactApiController))
    .delete('/delete/:id', contactApiController.delete.bind(contactApiController));

module.exports = router;
