const express = require("express"); //all the things we will need
const cors = require("cors");
const mongoose = require("mongoose"); //help connect mongodb
require("dotenv").config(); //configures so we have our .env file

const app = express(); // creates express server and show port it will run on
const port = process.env.PORT || 5000;

app.use(cors()); //cors middleware
app.use(express.json()); //sending and receiving json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  //starts the server
  console.log(`Server is running on port: ${port}`);
});
