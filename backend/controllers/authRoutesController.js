const User = require('../models/UserModel');

const register = (req,res) => {

    const {username,password,role} = req.body;

    try{
        const user = await 
    }catch(error){
        res.status(401).json({error});
    }
}

module.exports = register;