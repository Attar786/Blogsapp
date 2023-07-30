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
    const userDoc = User.create({username, password});
    res.json(userDoc);
})

app.listen(4000);