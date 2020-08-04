const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Parse config file
dotenv.config({ path: "./config/config.env" });

//  connect mongo
connectDB();

// Adds routes
const transactions = require("./routes/transactions");

// Starts app
const app = express();

// Middleware for body parse
app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running ${process.env.NODE_ENV} mode, port ${PORT}`.yellow.bold
  )
);
