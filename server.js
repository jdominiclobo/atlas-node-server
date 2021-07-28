//imports
const express = require("express");
const app = express();
const connectDB = require("./DB/Connection");

//Connect to the DB
connectDB();

// Defining the PORT
const PORT = process.env.PORT || 4000;

app.use(express.json({ extended: false }));
app.use("/api/userModel", require("./Route/User"));

//Listening to the PORT
app.listen(PORT, () => {
  console.log("Server has started");
});
