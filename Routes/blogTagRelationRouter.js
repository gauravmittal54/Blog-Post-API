const express = require('express');
const router = express.Router();
const BlogTagRelation = require('../Schemas/blogTagRelationSchema');
const Tag = require('../Schemas/tagSchema');
const Blog = require('../Schemas/blogSchema');
const isAdminMiddleware = require('../CustomMiddleware/checkIsAdmin');


// Route for adding a tag to a blog
router.post('/addtagtoblog', async (req, res) => {
    try {
        const { blog_id, tag_id } = req.body;

        const blog = await Blog.findByPk(blog_id);
        if (!blog) {
            return res.status(404).json({
                success: 0,
                message: "Blog not found"
            });
        }

        const tag = await Tag.findByPk(tag_id);
        if (!tag) {
            return res.status(404).json({
                success: 0,
                message: "Tag not found"
            });
        }

        const newRelation = await BlogTagRelation.create({ blog_id, tag_id });

        return res.status(201).json({
            success: 1,
            data: newRelation,
            message: "Tag added to the blog successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});


// Route for deleting a tag from a blog
router.delete('/removetagfromblog/:blog_id/:tag_id', isAdminMiddleware, async (req, res) => {
    try {
        const { blog_id, tag_id } = req.params;

        const blog = await Blog.findByPk(blog_id);
        if (!blog) {
            return res.status(404).json({
                success: 0,
                message: "Blog not found"
            });
        }

        const tag = await Tag.findByPk(tag_id);
        if (!tag) {
            return res.status(404).json({
                success: 0,
                message: "Tag not found"
            });
        }

        await BlogTagRelation.destroy({ where: { blog_id, tag_id } });

        return res.status(200).json({
            success: 1,
            message: "Tag removed from the blog successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

// Route for updating a tag for a specific blog post
router.put('/updateTagForBlog/:blog_id/:tag_id', isAdminMiddleware, async (req, res) => {
    try {
        const { blog_id, tag_id } = req.params;

        const blog = await Blog.findByPk(blog_id);
        if (!blog) {
            return res.status(404).json({
                success: 0,
                message: "Blog not found"
            });
        }

        const tag = await Tag.findByPk(tag_id);
        if (!tag) {
            return res.status(404).json({
                success: 0,
                message: "Tag not found"
            });
        }

        const response = await fetch(`http://localhost:3000/api/v1/tag/${tag_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const responseData = await response.json();

        // Handle the response from the tag update route
        if (response.ok) {
            return res.status(200).json({
                success: 1,
                message: responseData.message
            });
        } else {
            return res.status(response.status).json({
                success: 0,
                message: responseData.message || "Failed to update tag"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
