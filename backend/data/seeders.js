require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const Student = require("../models/studentModel");

const DB = process.env.DATABASE_URI;
const students = JSON.parse(
  fs.readFileSync(`${__dirname}/student.json`, "utf-8")
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log(`Database Connected!`);
  });

const importData = async () => {
  try {
    await Student.create(students);
    console.log("Data imported successfully!");
  } catch (error) {
    console.error(error.message);
  }
  process.exit();
};

const clearData = async () => {
  try {
    await Student.deleteMany();
    console.log("Data deleted successfully!");
  } catch (error) {
    console.error(error.message);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  clearData();
}
