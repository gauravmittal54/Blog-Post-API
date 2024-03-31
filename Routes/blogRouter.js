const express = require('express');
const router = express.Router();
const Blog = require('../Schemas/blogSchema');
const User = require('../Schemas/userSchema');
const isAdminMiddleware = require('../CustomMiddleware/checkIsAdmin');

// Get all blog posts
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        return res.status(200).json({
            success: 1,
            data: blogs
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

// Create a new blog post
router.post('/blog', async (req, res) => {
    try {
        const { title, content, author, user_id } = req.body;

        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({
                success: 0,
                message: "Invalid user_id provided"
            });
        }

        const blog = await Blog.create({ title, content, author, user_id });
        return res.status(201).json({
            success: 1,
            data: blog
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

// Update an existing blog post
router.put('/blog/:id', isAdminMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, author, user_id } = req.body;
        const [updatedRows] = await Blog.update({ title, content, author, user_id }, { where: { seqNo : id } });
        if (updatedRows === 0) {
            return res.status(404).json({
                success: 0,
                message: "Blog post not found"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Blog post updated successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

// Delete an existing blog post
router.delete('/blog/:id', isAdminMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await Blog.destroy({ where: { seqNo : id } });
        if (deletedRows === 0) {
            return res.status(404).json({
                success: 0,
                message: "Blog post not found"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Blog post deleted successfully"
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
