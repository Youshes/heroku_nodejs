const express= require('express');
const app = express.Router();

// Controller 

const getAdminController = require('../../controller/Admin/getAdminController');

exports.getAdminIndexRoute = app.get('/',getAdminController.getAdminIndexController);
exports.getAdmiCategoryRoute = app.get('/category',getAdminController.getAdminCategoryController);
exports.getAdminProductRoute = app.get('/product',getAdminController.getAdminProductController);