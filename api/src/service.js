const pool = require('../../configuration/database');
const { BlogPost } = require('./schema')

module.exports = {
    create: async (data, callback) => {
        try {
            const result = await BlogPost.create(data);
            callback(null, result);
        } catch (error) {
            callback(error);
        }
    }
};