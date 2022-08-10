class SiteController {
    // login
    login(req, res) {
        res.send("login");
    }

    search(req, res) {
        res.send("search");
    }

}

module.exports = new SiteController;