require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const cors = require("cors");

const app = express();
const DATABASE_URI = process.env.DATABASE_URI;

app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "ping successfully",
  });
});

mongoose
  .connect(DATABASE_URI)
  .then((res) => {
    console.log("Database connected successfully");
  })

  .catch((error) => {
    console.log(error.message);
  });

module.exports = app;
