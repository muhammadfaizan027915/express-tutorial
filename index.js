const db = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const express = require("express");
const morgan = require("morgan");
const app = express();

// Database Connection
db.connect()

// Middlewares
app.use([morgan("dev"), express.json()]);

// Routes
app.use(userRoutes);

const PORT = 6000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server started at", PORT);
});
