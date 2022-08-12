const jwt = require('jsonwebtoken');

const Auth = {
    verifiToken: (req, res, next) => {
        const token = req.headers.authorization
        if(token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.SECRET_KEY_JWT, (err, user) => {
                if(err) {
                    res.json({
                        success: false,
                        message: "Token is not valid"
                    })
                }
                req.user = user;
                next();
            })
        }
        else {
            res.json({
                success: false,
                message: "You are not anthenticated"
            })
        }
    }
}

module.exports = Auth