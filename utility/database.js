const Sequelize = require('sequelize');

const mysql = new Sequelize('tOt5En8b22', 'tOt5En8b22', 'RzFwaPm3nV', {
  host: 'remotemysql.com',
  dialect: 'mysql'
});
module.exports = mysql;