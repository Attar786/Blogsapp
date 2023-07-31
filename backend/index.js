const express = require('express');

const bcrypt = require('bcryptjs');

const app = express();

const  salt = bcrypt.genSaltSync(10);

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
        const userDoc =  User.create({username, password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    }
    catch(e) {
    res.status(400).json(e);
    }
   
})
app.listen(4000);