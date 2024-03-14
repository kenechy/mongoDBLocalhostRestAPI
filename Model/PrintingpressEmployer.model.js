const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrintingpressEmployerSchema = new Schema({
    firstName:{                             //firstname. middlename, lastname, gender, age min(18) max(50), address, bday, dateCreated
        type: String,   
        require: true
    },
    middleName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        min: 18,
        max: 50,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    birthday:{
        type: Date,
        require: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }
});

const PrintingpressEmployer = mongoose.model('Printing_Press_Employer_Details', PrintingpressEmployerSchema);
module.exports = PrintingpressEmployer;