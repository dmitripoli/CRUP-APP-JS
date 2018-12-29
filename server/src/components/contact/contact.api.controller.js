const BaseAPIController = require('../base/base.api.controller');
const { ContactController } = require('./contact.controller');

class ContactAPIController extends BaseAPIController {
    constructor() {
        super(new ContactController());
    }
}

module.exports = ContactAPIController;
