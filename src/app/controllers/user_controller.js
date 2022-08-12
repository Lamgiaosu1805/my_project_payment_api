const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    async getUserInfo(req, res) {
        const user = await User.findById(req.user.id);
        if(!user) {
            console.log("Không tìm thấy user !!")
            res.json({
                success: false,
                message: "Không tìm thấy user"
            })
        }
        else {
            res.json({
                success: true,
                fullname: user.fullname,
                isAdmin: user.isAdmin,
                avatar_url: user.avatar_url
            });
        }
    }
}

module.exports = new UserController;