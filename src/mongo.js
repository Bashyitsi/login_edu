const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginForm")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique
    },
    password: {
        type: String,
        required: true
    }
});

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection