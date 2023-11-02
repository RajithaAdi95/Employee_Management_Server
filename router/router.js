const express = require("express");
const router = express();

const EmployeeController = require("../controller/employeeController");

router.get("/get_all_employees", EmployeeController.get_all_employees);
router.post("/create_employee", EmployeeController.create_employee);
router.get("/get_employee/:id", EmployeeController.get_single_employee);
router.put("/update_employee/:id", EmployeeController.update_employee);
router.delete("/delete_employee/:id", EmployeeController.delete_employee);

module.exports = router;