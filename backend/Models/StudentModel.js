const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subName:{
        type: "String",
        required: true
    },
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
        required: true,
        min: 1
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
    program: {
        type: "String",
        required: true
    },
    semesters: [semseterSchema]
});

studentSchema.statics.add = async function(username,name,roll,clss,semesters) {
    try{
        const student = await this.create({name,username,roll,class:clss,semesters});
        return student;
    }catch(err){
        console.log(err);
    }
}

module.exports = mongoose.model('Student',studentSchema);