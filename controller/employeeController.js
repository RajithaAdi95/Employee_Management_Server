const { default: mongoose } = require("mongoose");
const Employee = require("../model/employee");

exports.get_all_employees = (req, res, next) => {
    Employee.find()
    .then((all_emp) => {
        res.send(all_emp);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
}

exports.create_employee = (req, res, next) => {
    const employee = new Employee({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    })
    employee.save()
    .then(() => {
        res.status(201).json({
            message: "Successfully added the employee!"
        })
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.get_single_employee = (req, res, next) => {
    Employee.findById({ _id: req.params.id })
    .then((emp) => {
        if(emp) {
            res.send(emp);
        }
        else {
            res.status(409).send("Employee not found");
        }
    })
    .catch((err) => {
        res.status(400).send("Something is wrong");
    })
}

exports.update_employee = (req, res, next) => {
    Employee.findById({ _id: req.params.id })
    .then((emp) => {
        if(emp) {
            const employee = ({
                name: req.body.name,
                position: req.body.position,
                office: req.body.office,
                salary: req.body.salary
            })
            Employee.updateOne({ _id: req.params.id }, employee)
            .then(() => {
                res.status(201).json({
                    message: "Successfully updated the employee details!"
                })
            })
            .catch((err) => {
                res.status(400).send(err);
            })
        }
        else {
            res.status(409).send("Employee not found");
        }
    })
}

exports.delete_employee = (req, res, next) => {
    Employee.findById({ _id: req.params.id })
    .then((emp) => {
        if(emp) {
            Employee.findOneAndDelete({ _id: req.params.id })
            .then((del_tourney) => {
                res.status(201).json({
                    message: "Successfully deleted the Employee! "
                })
            })
            .catch((err) => {
                res.status(400).send("Error in deleting employee", err);
            })
        }
        else {
            res.status(409).send("Employee not found");
        }
    })
}