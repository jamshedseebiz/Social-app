const mongoose = require("mongoose");

// connection to mongo db

async function connectDb(){
  try{

    await mongoose.connect("mongodb://localhost:27017/jamshedDb" , {
      useNewUrlParser : true,
      useUnifiedTopology : true
    });
    console.log("Connected to Mongo Db Successfully");
  }
  catch(err){
      console.log("Error Connecting to Mongo Db");
  }
}


connectDb()


// Schema banana ka code 

const Schema = new mongoose.Schema({
  name : {type:String , required:true},
  email: {type : String , required : true , unique:true},
  password : {type:String , required:true}
});

const User = mongoose.model("User" , Schema);

User.create({
  name : "Mehbob Ali",
  email : "mehbob@gmail.com",
  password : "webgpt4567"
})
.then(result => console.log("User Created SuccessFully" , result))
.catch(error => console.log("User not Created" , error));


// find by id 

// User.findById("671bcd6c603b47095e179d28")
// .then(r => console.log("User Found" , r))
// .catch(err => console.log("User not Found" , err))


// find all users 
User.find()
.then(r => console.log("User Found" , r))
.catch(err => console.log("User not Found" , err))


// User.findByIdAndUpdate("671bcd6c603b47095e179d28" , {name:"Jamshed Khaleel Baloch"})
// .then(u => console.log("User Update successfully" , u))
// .catch(err => console.log("User Not Update" , err));


// User.findByIdAndDelete("671a996fbd5d4807fa8d5d60")
// .then(d => console.log("User Deleted successfully" , d))
// .catch(err => console.log("User Not Update" , err));




