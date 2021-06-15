const { DataTypes } = require('sequelize');

const db = require('../db/connection');

const Category = db.define('Category', {
    name_category: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Category;