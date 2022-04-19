const express = require('express');

const controllers = require('../controllers/code')

const codeRouter = express.Router();

// blogRouter.get('/', (req, res) => res.send('This is the root!'));

codeRouter.get('/', controllers.getAllCode);
codeRouter.post('/add', controllers.addCodePost);
codeRouter.put('/update/:id', controllers.updateCodePost);
codeRouter.get('/:id', controllers.getCodeById);
codeRouter.delete('/:id',controllers.deleteCodeById);
codeRouter.get('/user/:id',controllers.getCodesByUserId);
module.exports = codeRouter;