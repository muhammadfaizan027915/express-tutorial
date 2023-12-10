const userRoutes = require("./src/routes/userRoutes");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// Global Middlewares
app.use([morgan("dev"), bodyParser.json()]);

// Routes
app.use(userRoutes);

// Database Connection
mongoose
  .connect("mongodb+srv://faizan027915:faizan027915@mern.jsr5rzh.mongodb.net", {
    dbName: "authenticationApp",
  })
  .then(() => {
    console.log("Connected to the database...");
  })
  .catch((e) => {
    console.log("Exception Occured: ", e);
  });

const Port = 5000;
app.listen(Port, () => console.log("Server started...." + Port));
