import Controller from 'src/interfaces/Controller.interface';
import express = require('express');
import AttributesService from './attributes.service';

export default class AttributesController implements Controller {
    path = '/Attributes';
    public router = express.Router();
    attrService = AttributesService.prototype;
    constructor() {
        this.attrService = new AttributesService();
        this.intializeRoutes();
    }
    // delete all attributes /api/Attributes/delete
    async deleteAttributes() {
        try {
            await this.attrService.deleteAttributes();
        } catch (err) {
            console.log(err.message);
        }

    }
    private intializeRoutes() {
        this.router.get('/DeleteAttributes', this.deleteAttributes.bind(this));
    }
}