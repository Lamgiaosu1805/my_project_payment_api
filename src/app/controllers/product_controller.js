const Product = require('../models/product')
class ProductController {

    //[GET] /product
    index(req, res) {
        res.send("Product");
    }
    //[GET] /product/:slug
    showDetailProduct(req, res) {
        res.send("Product detail");
    }
    //[GET] /product/test
    test(req, res) {
        res.send("test");
    }
    //[POST] /product/create
    createProduct(req, res) {
        const body = req.body;
        try {
            const product = new Product(body);
            product.save();
            res.json({
                "success": true
            })
        } catch (error) {
            console.log(e);
        }
    }
    
}

module.exports = new ProductController; 