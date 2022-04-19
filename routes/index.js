const express = require('express');
const controllers = require('../controllers/index')

const router = express.Router();

// router.get('/',(req, res) => res.send('This is the root!'));
router.get('/',controllers.getAllUsers);
router.post('/signup', controllers.signup);
router.post('/login',controllers.login);

module.exports = router;