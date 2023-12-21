const Teacher = require('../models/TeacherModel');

//get teacher details
const getTeacher = async (req,res)=>{
    try{
        const teachers = await Teacher.find({});
        res.status(200).json({teachers});
    }catch(err){
        res.status(401).json({error : err.message});
    }
}

//add new teacher
const postTeacher = async (req,res) =>{
    const {name,username,subjects} = req.body;
    const teacher = await Teacher.add(name,username,subjects);

    res.status(200).json({teacherUsr:teacher.username});
}

//update teacher details
const putTeacher = async(req,res) =>{

}

//delete teacher
const deleteTeacher = async(req,res) =>{
    const {username} = req.body;
    const teacher = await Teacher.deleteOne({username});
    res.status(200).json({teacher});
}

module.exports = {getTeacher,postTeacher,putTeacher,deleteTeacher};