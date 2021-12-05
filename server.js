const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js')
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 9090;

app.use(express.json());

mongoose.connect('mongodb+srv://dbMelody:qazzaq@cluster0.jtt9c.mongodb.net/101281971_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(employeeRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});