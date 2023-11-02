const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
})

module.exports = mongoose.model("Employee", employeeSchema);