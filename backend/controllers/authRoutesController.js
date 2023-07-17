const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn : '1d'});
}

const register = async (req,res) => {

    const {username,password,role} = req.body;

    try{
        const user = await User.register(username,password,role);
        res.status(200).json({user});
    }catch(error){
        res.status(401).json({error});
    }
}

const login = async (req,res) => {

    const {username,password} = req.body;

    try{
        const user = await User.login(username,password);
        const jwt = createToken(user._id);
        res.status(200).json({role:user.role,jwt});
    }catch(error){
        res.status(401).json({error});
    }
}

module.exports = {register,login};