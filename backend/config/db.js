const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB is connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Message : ${error.message}`);
    process.exit();
  }
};

exports.connectDB = connectDB;
