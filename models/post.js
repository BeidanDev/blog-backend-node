const { DataTypes } = require('sequelize');

const db = require('../db/connection');
const Category = require('./category');

const Post = db.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    create_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    }
});

module.exports = Post;