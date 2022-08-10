const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site_controller');

router.get("/login", siteController.login);
router.get("/search", siteController.search);

module.exports = router;