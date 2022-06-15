const mongoose = require("mongoose");
const env = require("./environment");
const colors = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(
            `Connected to MongoDB :: ${conn.connection.host}`.cyan.underline
        );
    } catch (err) {
        console.log(`Error connecting to MongoDB: ${err.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;
