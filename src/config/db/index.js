const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://kylanx11:nghiemlamhust1@cluster0.qjbm1.mongodb.net/?retryWrites=true&w=majority');
        console.log("connect successfully");
    } catch (error) {
        console.log(`connect failure ${error}`);
    }
}

module.exports = {connect};