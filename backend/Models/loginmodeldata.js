import mongoose from 'mongoose';

const loginstructure = new mongoose.Schema({
   firstname:String,
   lastname:String,
   email:String,
   password:String,
   confirmpassword:String, 
});

const loginstructureModel = mongoose.model("login", loginstructure);
export default loginstructureModel;