const express = require('express');
let connection = require('./connection');
const student = require('./routes/student');
const app = express();
app.use(student);
connection();

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3000");
    }
})
