const express = require('express');
const router = express.Router();
const Tag = require('../Schemas/tagSchema');
const isAdminMiddleware = require('../CustomMiddleware/checkIsAdmin');


// Get all tags
router.get('/tags', async (req, res) => {
    try {
        const tags = await Tag.findAll();
        return res.status(200).json({
            success: 1,
            data: tags
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

// Create a new tag
router.post('/tag', async (req, res) => {
    try {
        const { tagName, tagDesc, user_id } = req.body;
        const tag = await Tag.create({ tagName, tagDesc, user_id });
        return res.status(201).json({
            success: 1,
            data: tag
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

// Update an existing tag
router.put('/tag/:id', isAdminMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { tagName, tagDesc, user_id } = req.body;
        const [updatedRows] = await Tag.update({ tagName, tagDesc, user_id }, { where: { seqNo: id } });
        if (updatedRows === 0) {
            return res.status(404).json({
                success: 0,
                message: "Tag not found"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Tag updated successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

// Delete an existing tag
router.delete('/tag/:id', isAdminMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await Tag.destroy({ where: { seqNo: id } });
        if (deletedRows === 0) {
            return res.status(404).json({
                success: 0,
                message: "Tag not found"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Tag deleted successfully"
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
