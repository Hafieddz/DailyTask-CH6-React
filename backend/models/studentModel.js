const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  age: {
    type: Number,
    required: [true, "Age cannot be empty"],
  },
  email: {
    type: String,
  },
  city: {
    type: String,
    required: [true, "City cannot be empty"],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
