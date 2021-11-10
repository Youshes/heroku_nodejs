const express = require('express');
const app = express.Router();

// Controlller 

const shopController = require('../../controller/Shop/getShopController');

exports.getIndexRoute = app.get('/',shopController.getIndexController);