const express = require('express');
const controllers = require('../controllers/index')

const router = express.Router();

// router.get('/',(req, res) => res.send('This is the root!'));

//router.get('/',controllers.getAllUsers);
router.post('/signup', controllers.signup);
router.post('/login',controllers.login);
router.get("/userVerify", controllers.verifyJWTtoken, controllers.getUser);
//verify token

module.exports = router;