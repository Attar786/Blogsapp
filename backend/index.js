const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
// const User = require('./models/User')
const User = require('./models/User')
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://adminblog:KUdPUXGTiUCBocwC@cluster0.kvfoaml.mongodb.net/?retryWrites=true&w=majority')
app.post('/register',  (req,res)=> 
{
    const {username, password} = req.body;
    
    try{
        const userDoc =  User.create({username, password});
        res.json(userDoc);
    }
    catch(e) {
    res.status(400).json(e);
    }
   
})
app.listen(4000);