const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./router/router");

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors({ origin: 'http://localhost:4200' }))

mongoose.connect("mongodb://localhost:27017/EmployeeDetails")
.then(() => {
    console.log("MongoDB is Connected");
})
.catch((err) => {
    console.log("Error in MongoDB Connection");
})

app.use("/api", authRoutes);

module.exports = app;