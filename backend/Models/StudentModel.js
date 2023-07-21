const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    grade : {
        type: "String",
        required: true
    },
    marks : {
        type: "Number",
        required: true,
        min: 0,
        max: 100
    }
});

const semseterSchema = new Schema({
    semNum:{
        type: "Number",
        required: true
    },
    subjects : [subjectSchema]
});

const studentSchema = new Schema({
    username: {
        type: "String",
        required: true,
        unique: true
    },
    name: {
        type: "String",
        required: true
    },
    roll: {
        type: "String",
        required: true,
        unique: true
    },
    class: {
        type: "String",
        required: true
    },
    semesters: [semseterSchema]
});

module.exports = mongoose.model('Student',studentSchema);