const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username : {
            type : "String",
            required: true,
            unique : true
        },
        password : {
            type: "String",
            required: true
        },
        role :{
            type: "String",
            required: true
        },
        orgName :{
            type: "String",
            required: true,
            unique: true
        }
    }
)

//function to sign up users
//admin access only 
userSchema.statics.register = async function(username,password,role,organisation){
    if(!username || !password || !role || !organisation){
        throw Error("Fill Every Field");
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough.");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    //add user to db
    const user = await this.create({username,password:hash,role,organisation});
    
    return user;
}

//function to login users
userSchema.statics.login = async function(username,password){
    
    if(!username || !password){
        throw Error("Fill Every Field");
    }
    
    const user = await this.findOne({username});

    if(user){
        //compare password with password hash
        const match = await bcrypt.compare(password,user.password);

        if(!match){
            throw Error("Invalid Credentials");
        }
        return user;
    }
    throw Error('Invalid Credentials')
    
}

module.exports = mongoose.model('User',userSchema);