const productRoute = require('./product_route');
const siteRoute = require('./site_route');

function route(app) {

    // api_url/
    app.use("/v1/", siteRoute);
    // api_url/product
    app.use("/v1/product", productRoute);
    
}

module.exports = route;