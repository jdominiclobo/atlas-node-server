const mongoose = require("mongoose");

const URI = "YOUR URI";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB is connected");
};

module.exports = connectDB;
