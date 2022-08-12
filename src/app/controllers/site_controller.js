const User = require("../models/user");
const bcrypt = require('bcrypt');

class SiteController {
    // login
    async signIn(req, res) {
        try {
            const user = await User.findOne({
                username: req.body.username
            })
            if (user) {
                const validatePassword = await bcrypt.compare(
                    req.body.password,
                    user.password
                );
                if(validatePassword) {
                    res.json({
                        success: true,
                        message: "Đăng nhập thành công",
                        access_token: "jlshgkshgsikhg"
                    });
                }
                else {
                    res.json({
                        success: false,
                        message: "Sai tài khoản hoặc mật khẩu !!"
                    });
                }
            }
            else {
                res.json({
                    success: false,
                    message: "Sai tài khoản hoặc mật khẩu !!"
                });
            }
        } catch (error) {
            console.log(error);
            res.json({
                code: 500,
                success : false,
                message : "Đăng nhập không thành công"
            })
        }
    }

    async signUp (req, res) {
        try {
            //hash password
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            const user = new User({
                username: req.body.username,
                password: hashed,
                fullname: req.body.fullname,
            })
            user.save((err) => {
                if(err) {
                    console.log(err)
                    res.json({
                        success: false,
                        err: err,
                        message: "Có lỗi trong lúc đăng ký tài khoản"
                    })
                }
                else {
                    res.json({
                        success: true,
                        message: "Đăng ký thành công"
                    })
                }
            }); 
            
        } catch (error) {
            console.log(error);
            res.json({
                code: 500,
                success : false,
                message : "Co loi trong luc dang ky tai khoan"
            });
        }
    }

    search(req, res) {
        res.send("search");
    }

}

module.exports = new SiteController;