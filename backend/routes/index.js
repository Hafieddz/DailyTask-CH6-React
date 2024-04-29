const router = require("express").Router();
const Student = require("./studentRoute");

router.use("/api/v1/students", Student);

module.exports = router;
