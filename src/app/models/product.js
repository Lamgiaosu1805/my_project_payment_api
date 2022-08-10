const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, default: ""},
    description: {type: String, default: ""},
    image_url: {type: String, default: ""} 
})

module.exports = mongoose.model('Product', ProductSchema);