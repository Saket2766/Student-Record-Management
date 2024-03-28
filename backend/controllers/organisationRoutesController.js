const Organisation = require('../models/OrganisationModel');

//getOrganisation details
const getOrganisation = async (req,res) =>{
    try{
        const organisations = await Organisation.find({});
        res.status(200).json({organisations});
    }
    catch(err){
        console.log(err);
        res.status(401).json({error : err.message});
    }
}
// add new organisation
const postOrganisation = async (req,res) =>{
    const {orgName,programs} = req.body;
    try{
        await Organisation.add({orgName,programs});
        res.status(200);
    }catch(err){
        console.log(err);
        res.status(401);
    }
}

module.exports={getOrganisation,postOrganisation};