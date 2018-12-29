const BaseController = require('../base/base.controller');
const ContactModel = require('./contact.model');

class ContactController extends BaseController {
    constructor() {
        super(ContactModel);
    }
}

module.exports.ContactController = ContactController;
