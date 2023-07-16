const express = require('express');
const router = express.Router();

const {register,login} = require('../controllers/authRoutesController');

//route to register
router.post('/register',register);

//route to login
router.post('/login',login);

module.exports = router;