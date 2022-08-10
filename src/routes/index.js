const productRoute = require('./product_route');
const siteRoute = require('./site_route');

function route(app) {

    // api_url/
    app.use("/", siteRoute);
    // api_url/product
    app.use("/product", productRoute);
    
}

module.exports = route;