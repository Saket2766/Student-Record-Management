const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const requireAuth = (...roles) => { 
        return async(req,res,next) =>{
        const {authorization} = req.headers;

        if(!authorization){
            res.status(401).json({error:"authorization required"});
        }

        const token = authorization.split(' ')[1];

        try{
            const {_id} = jwt.verify(token,process.env.SECRET);

            req.user = await User.findOne({_id});

            for (let role in roles){
                if (req.user.role === role){
                    next();
                }
            }
            res.status(401).json({error:"authorization required"});
            
        }catch(err){
            res.status(401).json({error:"authorization required"});
        }
    }
}

module.exports = requireAuth;