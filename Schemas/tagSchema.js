// Schemas/tagSchema.js
const { sequelize } = require("../Configuration/database");
const { DataTypes } = require('sequelize');

const Tag = sequelize.define('Tag', {
    seqNo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tagName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tagDesc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Tag.sync();


module.exports = Tag;
