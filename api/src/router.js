const { createBlogPosts } = require('./controller');
const router = require('express').Router();

router.post('/posts',createBlogPosts)


module.exports = router;
