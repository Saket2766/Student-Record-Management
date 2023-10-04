const express = require('express');
const router = express.Router();

const {getTeacher,
    postTeacher,
    putTeacher,
    deleteTeacher} = require('../controllers/teacherRoutesController');

//authentication
const Auth = require('../middleware/RequireAuth');

router.use(Auth("teacher"));
//get teacher data
router.get('/teacher', getTeacher);

//add teacher data
router.post('/teacher', postTeacher);

//update teacher data
router.put('/teacher', putTeacher);

//delete teacher data
router.delete('/teacher', deleteTeacher);

module.exports = router;