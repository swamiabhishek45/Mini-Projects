const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://swamiabhishek45:swamiabhishek45@cluster0.uh272mr.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;