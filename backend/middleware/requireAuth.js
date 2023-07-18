const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const requireAuth = async(req,res,next) =>{
    const authorization = req.header.authorization;

    if(!authorization){
        res.status(401).json({error:"authorization required"});
    }

    const token = authorization.split(' ')[1];

    try{
        const {_id} = jwt.verify(token,process.env.SECRET);

        req.user = await User.findOne({_id});
        next();
    }catch(err){
        res.status(401).json({error:"authorization required"});
    }
}
module.exports = requireAuth;