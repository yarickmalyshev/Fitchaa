import mongoose from 'mongoose';


const Admin = new mongoose.Schema({
    login:{type:String,require:true},
    number:{type:Number,require:true},
    admin:{type:Boolean}
})
export default mongoose.model('Admin',Admin)