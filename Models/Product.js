const db = require('../utility/database');
const sequelize = require('sequelize');

const Product = db.define('Product' ,{
    title : sequelize.STRING,
    image : sequelize.STRING,
    description : sequelize.STRING,
    price : sequelize.INTEGER
})
module.exports = Product;