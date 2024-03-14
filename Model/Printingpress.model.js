const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrintingpressSchema = new Schema({
    fullName:{
        type: String,
        require: true
    },
    numberOfPrint:{
        type: Number,
        require: true
    },
    bill:{
        type: Number,
        require: true
    },
    fetchDate:{
        type: Date,
        require: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }
});

const Printingpress = mongoose.model('Printing_Press_Details', PrintingpressSchema);
module.exports = Printingpress;