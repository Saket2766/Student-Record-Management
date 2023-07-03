require('dotenv').config();

const express = require('express');
const server = express();
const mongoose = require('mongoose');

//Connect to DB and start server
mongoose.connect(process.env.MONGO_URI).then(
    () => {
        server.listen(process.env.PORT, ()=>{
            console.log("Connected to DB. Server listening on port 4000")
        })
    }
).catch( (err) => {
    console.log(err);
})

//Middleware

server.use((req,res,next) =>{
    console.log(req.method,req.path);
    next();
})


//routes
server.get('/', (req,res) => {
    res.send({message : 'Response Sent'});
})