const express = require('express');

const controllers = require('../controllers/blog');
const blog = require('../models/blog');

const blogRouter = express.Router();

// blogRouter.get('/', (req, res) => res.send('This is the root!'));

blogRouter.get('/', controllers.getAllBlogs);
blogRouter.post('/add', controllers.addBlogPost);
blogRouter.put('/update/:id', controllers.updateBlogPost);
blogRouter.get('/:id', controllers.getBlogById);
blogRouter.delete('/:id',controllers.deleteBlogById);
blogRouter.get('/user/:id',controllers.getBlogsByUserId);
module.exports = blogRouter;