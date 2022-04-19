const express = require('express');
const logger = require('morgan');
const routes = require('./routes/index');
const blogRouter = require('./routes/blog');
const codeRouter = require('./routes/code');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));
app.use('/api/users', routes);
app.use('/api/blogs', blogRouter);
app.use('/api/codes',codeRouter);

module.exports = app;