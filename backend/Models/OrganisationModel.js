const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programSchema = new Schema({
    progName :{
        type: "String",
        required: true,
        unique: true
    },
    courses : [{
        courseName : { type : String, unique : true}
    }]
});

const organisationSchema = new Schema ({
    orgName :{
        type: "String",
        required: true,
        unique: true
    },
    programs : [programSchema],
    
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