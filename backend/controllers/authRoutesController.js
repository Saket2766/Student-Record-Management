const User = require('../models/UserModel');

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
        res.status(200).json({user});
    }catch(error){
        res.status(401).json({error});
    }
}

module.exports = {register,login};