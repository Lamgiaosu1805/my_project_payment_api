const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/user_controller');
const Auth = require('../middlewares/auth');


router.get('/profile', Auth.verifiToken, userController.getUserInfo);

module.exports = router;