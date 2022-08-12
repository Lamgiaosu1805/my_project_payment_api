const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, require: true, unique: true, minlength: 6},
    password: {type: String, require: true, minlength: 8},
    isAdmin : {type: Boolean, default: false},
    fullname: {type: String, require: true, minlength: 1},
    avtar_url: {type: String, default: ""}
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);