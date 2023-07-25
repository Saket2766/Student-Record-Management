const Student = require('../models/StudentModel');

//get student details
const getStudent = async (req,res)=>{
    try{
        const students = await Student.find({});
        res.status(200).json({students});
    }catch(err){
        res.status(401).json({error : err.message});
    }
}

//add new student
const postStudent = async (req,res) =>{
    const {name,username,roll,clss,semesters} = req.body;
    const student = await Student.add(name,username,roll,clss,semesters);

    res.status(200).json({student});
}

//update student details
const putStudent = async(req,res) =>{

}

//delete student
const deleteStudent = async(req,res) =>{
    const {username} = req.body;
    
    const student = await Student.deleteOne({username});
    res.status(200).json({student});
}

module.exports = {getStudent,postStudent,putStudent,deleteStudent};