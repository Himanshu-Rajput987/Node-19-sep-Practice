const mongoose = require('mongoose');

async function connection(){
    try{
       await mongoose.connect(`mongodb://localhost:27017/Node-19-sept`);
       console.log("Database Connected...");
    }catch(err){
        console.log(err);
    }
}

module.exports = connection;