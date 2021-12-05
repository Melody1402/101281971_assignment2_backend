const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//GET all
//All employee resources are fetched
// http://localhost:9090/api/v1/employees 
app.get('/api/v1/employees', async (req, res) => {
    const employees = await employeeModel.find({});

    try {
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST create/insert
// http://localhost:9090/api/v1/employees
app.post('/api/v1/employees', async (req, res) => {
    const employee = new employeeModel(req.body);
    try {
        await employee.save();
        res.status(201).send("A new employee resource is created.");
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET one
// 1 employee resource is fetched.
// http://localhost:9090/api/v1/employees/{id}
app.get('/api/v1/employees/:id', async (req, res) => {
    const employee = await employeeModel.find({id: req.params.id}).exec();

    try {
        res.status(200).send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});

// PUT - update 1 employee
// http://localhost:9090/api/v1/employees/{id}
app.put('/api/v1/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findOneAndUpdate({'returnNewDocument':true}, {id: req.params.id}, req.body)
        await employee.save()
        res.status(200).send("Employee Updated")
    } catch (err) {
        res.status(500).send(err)
    }
});

//DELETE 1 employee
// http://localhost:9090/api/v1/employees/{id}
app.delete('/api/v1/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findOneAndDelete({id: req.params.id})

        if (!employee) res.status(404).send("No item found")
        res.status(204).send("Deleted sucessfully!")
    } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = app