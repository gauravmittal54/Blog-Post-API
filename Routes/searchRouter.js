const express = require('express');
const router = express.Router();
const { sequelize } = require('../Configuration/database');

// Route for dynamic search
router.get('/search', async (req, res) => {
    try {
        let query = `
            SELECT b.*
            FROM Blogs b
            INNER JOIN BlogTagRelations bt ON b.seqno = bt.blog_id
            INNER JOIN Tags t ON bt.tag_id = t.seqNo`;

        const { author, startDate, endDate, tags } = req.body;

        if (Object.keys(req.body).length === 0) {
            query += ';';
        } else {
            query += ' WHERE';
            let check = false;
            if (author) {
                check = true;
                query += ` b.author = '${author}'`;
            }

            if (startDate && endDate) {
                if(check){
                query += ` AND b.createdAt BETWEEN '${startDate}' AND '${endDate}'`;
                }else{
                check = true;
                query += ` b.createdAt BETWEEN '${startDate}' AND '${endDate}'`;   
                }
            }

            if (tags && tags.length > 0) {
                const tagNames = tags.map(tag => `'${tag}'`).join(',');
                if(check){
                query += ` AND t.tagName IN (${tagNames})`;
                }else{
                check = true;
                query += ` t.tagName IN (${tagNames})`;
                }
            }

            query += ';';
        }

        const results = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });

        return res.status(200).json({
            success: 1,
            data: results
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
