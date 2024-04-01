const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    depName :{
        type: "String",
        required: true,
        unique: true
    },
    courses : [{
        courseName : { type : String}
    }]
});

const organisationSchema = new Schema ({
    orgName :{
        type: "String",
        required: true,
        unique: true
    },
    department : [departmentSchema],
    programs : [{ type: "String", required: true}],
});

organisationSchema.statics.add = async function(orgName,programs){
    try{
        const organisation = await this.create({orgName,programs});
        return organisation;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = mongoose.model('Organisation',organisationSchema);