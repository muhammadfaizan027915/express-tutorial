const userRoutes = require("./src/routes/userRoutes");
const express = require("express");
const app = express();
const morgan = require("morgan");

// Global Middlewares
app.use(morgan('dev'));

// Routes
app.use(userRoutes);

const Port = 5000;
app.listen(Port, () => console.log("Server started...." + Port));
