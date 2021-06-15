const { Sequelize } = require('sequelize');

const db = new Sequelize('blog', 'root', 'qwe123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;