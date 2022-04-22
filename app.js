const express = require('express');
const logger = require('morgan');
const routes = require('./routes/index');
const blogRouter = require('./routes/blog');
const codeRouter = require('./routes/code');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors({
    credentials: true,
    origin: true}));
// app.use(cors({
//     // origin: 'http://localhost:3001',
//     origin: '*',
//     credentials: true
// }));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));
app.use('/api/users', routes);
app.use('/api/blogs', blogRouter);
app.use('/api/codes',codeRouter);

module.exports = app;