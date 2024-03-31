const { sequelize } = require('../Configuration/database');
const { DataTypes } = require('sequelize');

const BlogTagRelation = sequelize.define('BlogTagRelation', {
    blog_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    tag_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    timestamp : {
        type : DataTypes.DATE,
        defaultValue : DataTypes.NOW
    }
});

BlogTagRelation.sync();

module.exports = BlogTagRelation;