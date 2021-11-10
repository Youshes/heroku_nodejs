const sequelize = require('sequelize');

//database 

const db = require('../utility/database');

const Category = db.define('Category',{
    name : sequelize.STRING,
   
})
module.exports = Category;