const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subName : {
        type: "String",
        required: true
    },
    sections : [{
        type: "String",
        required: true
    }]
})

const teacherSchema = new Schema({
    name: {
        type: "String",
        required: true
    },
    username: {
        type: "String",
        required: true,
        unique: true
    },
    subjects: [subjectSchema]
})

module.exports = mongoose.model('Teacher',teacherSchema);