const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connect successfully");
    } catch (error) {
        console.log(`connect failure ${error}`);
    }
}

module.exports = {connect};