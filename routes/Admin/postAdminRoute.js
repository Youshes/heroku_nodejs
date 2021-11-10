const express = require('express');
const app = express.Router();

// Controller

const postAdminController = require('../../controller/Admin/postAdminController');

exports.postAdminRoute = app.post('/category',postAdminController.postAdminCategoryController);
exports.postAdmiProductnRoute = app.post('/product',postAdminController.postAdminProductController);