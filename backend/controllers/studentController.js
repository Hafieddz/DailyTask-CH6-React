const Student = require("../models/studentModel");

const getStudent = async (req, res, next) => {
  try {
    const student = await Student.find();

    res.status(200).json({
      status: "success",
      totalData: student.length,
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const addStudent = async (req, res) => {
  try {
    await Student.create({ ...req.body });

    res.redirect("http://localhost:5173/");
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await Student.findByIdAndUpdate(id, { ...req.body });

    res.redirect("http://localhost:5173/");
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await Student.findByIdAndDelete(id);

    res.redirect("http://localhost:5173/");
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getStudent,
  updateStudent,
  deleteStudent,
  addStudent,
};
