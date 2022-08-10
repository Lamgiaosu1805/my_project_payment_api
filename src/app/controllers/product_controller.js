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
    
}

module.exports = new ProductController; 