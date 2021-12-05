const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:[true, "Id cannot be empty"]
    },
    firstName: {
        type: String,
        required: [true, "First name cannot be empty"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name cannot be empty"],
        trim: true,
    },
    emailId:{
        type: String,
        required: [true, "Email cannot be empty and must be in valid form"],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
