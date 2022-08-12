const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, default: ""},
    image_url: {type: String, default: ""} 
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema);