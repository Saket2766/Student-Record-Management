const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn : '1d'});
}

const register = async (req,res) => {

    const {username,password,role,organisation} = req.body;

    try{
        const user = await User.register(username,password,role,organisation);
        const jwt = createToken(user._id);
        res.status(200).json({role:user.role,jwt});
    }catch(error){
        res.status(401).json({error:error.message});
    }
}

const login = async (req,res) => {

    const {username,password} = req.body;

    try{
        const user = await User.login(username,password);
        const jwt = createToken(user._id);
        res.status(200).json({role:user.role,jwt});
    }catch(err){
        res.status(401).json({error:err.message});
    }
}

module.exports = {register,login};