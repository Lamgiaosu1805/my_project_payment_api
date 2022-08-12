const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site_controller');

router.post("/signIn", siteController.signIn);
router.post("/signUp", siteController.signUp);
router.get("/search", siteController.search);

module.exports = router;