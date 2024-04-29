const router = require("express").Router();
const Student = require("../controllers/studentController");

router.get("/", Student.getStudent);
router.post("/", Student.addStudent);
router.post("/update/:id", Student.updateStudent);
router.post("/delete/:id", Student.deleteStudent);

module.exports = router;
