const express = require('express');
const router = express.Router();
//import controller
const productController = require('../app/controllers/product_controller');


//Product Route
router.get("/test", productController.test)
router.get("/:slug", productController.showDetailProduct);
router.get("/", productController.index);


module.exports = router;