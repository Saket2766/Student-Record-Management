const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subName : {
        type: "String",
        required: true
    },
    sections : [String]
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

teacherSchema.statics.add = async function (name,username,subjects){
    try{
        const teacher = await this.create({name,username,subjects});
        return teacher;
    }catch(err){
        console.log(err);
    }   
}

module.exports = mongoose.model('Teacher',teacherSchema);