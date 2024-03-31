// schema.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'sql6.freesqldatabase.com',
  port: 3306,
  username: 'sql6695475',
  password: 'qweITTWpFM',
  database: 'sql6695475'
});

const BlogPost = sequelize.define('TableX', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = {
  BlogPost,
  sequelize // Export the Sequelize instance as well if needed elsewhere
};
