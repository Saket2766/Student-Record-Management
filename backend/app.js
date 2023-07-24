require('dotenv').config();

const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

//routers
const authRouter = require('./routes/userAuthRoutes');
const teacherRouter = require('./routes/teacherRoutes');

//Set CORS Policy
server.use(cors({
    origin : "*"
}))

//Connect to DB and start server
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        server.listen(process.env.PORT, () => {
            console.log("Connected to DB. Server listening on port 4000")
        })
    })
    .catch((err) => {
        console.log(err);
    })

//Middleware
server.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})
server.use(express.json());

//routes
server.get('/', (req, res) => {
    res.send({ message: 'Response Sent' });
})
//auth Routes
server.use('/api/user',authRouter);
//teacher data Routes
server.use('/api/user',teacherRouter);