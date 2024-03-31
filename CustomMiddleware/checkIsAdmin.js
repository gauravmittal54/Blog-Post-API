const User = require('../Schemas/userSchema');
const Blog = require('../Schemas/blogSchema');
const Tag = require('../Schemas/tagSchema');

const isAdminMiddleware = async (req, res, next) => {
    try {
        const { user_id, title, content, author, tagName, tagDesc, blog_id } = req.body;

        // Check if the user is an admin
        const user = await User.findByPk(user_id);
        if (!user || !user.isAdmin) {

        // Check if the request is for updating a blog post
        if (title && content && author) {
            const existingBlog = await Blog.findOne({ where: { title, content, author } });
            if (existingBlog && existingBlog.user_id !== user_id) {
                return res.status(403).json({
                    success: 0,
                    message: "Unauthorized. You can only update your own blog posts."
                });
            }
        }

        // Check if the request is for updating a tag
        if (tagName && tagDesc) {
            const existingTag = await Tag.findOne({ where: { tagName, tagDesc } });
            if (existingTag && existingTag.user_id !== user_id) {
                return res.status(403).json({
                    success: 0,
                    message: "Unauthorized. You can only update your own tags."
                });
            }
        }

        if (blog_id) {
            const existingBlogById = await Blog.findByPk(blog_id);
            if (existingBlogById && existingBlogById.user_id !== user_id) {
                return res.status(403).json({
                    success: 0,
                    message: "Unauthorized. You can only update your own blog posts."
                });
            }
        }
    }
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: 0,
            message: "Internal Server Error"
        });
    }
};

module.exports = isAdminMiddleware;
