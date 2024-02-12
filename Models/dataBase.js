const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/UserData?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1').then(()=>{
    console.log("Connected to mongo database");
}).catch((err)=>{
    console.log(err);
})