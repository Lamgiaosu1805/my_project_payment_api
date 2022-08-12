const productRoute = require('./product_route');
const siteRoute = require('./site_route');
const userRoute = require('./user_route');

function route(app) {

    // api_url/
    app.use("/v1/", siteRoute);

    // api_url/product
    app.use("/v1/product", productRoute);

    //
    app.use("/v1/user", userRoute);
    
}

module.exports = route;