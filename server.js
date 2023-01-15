const express = require('express')
const cors = require('cors')
const app = express()
const User = require("./db/user")
const path =require('path')
require('./db/config');
const PORT = 5000

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname + "/public")))

app.post('/',async(req,resp)=>{
    let user=new User(req.body);
    let result= await user.save();
    resp.send(result);
    console.log(result);
})
app.listen(PORT, () => {
    console.log("server running " + PORT)
}) 