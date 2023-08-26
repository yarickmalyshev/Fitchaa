import mongoose from 'mongoose';


const User = new mongoose.Schema({
    login:{type:String,require:true},
    number:{type:Number,require: true},
    subscriber:{type:Boolean}
})

export default mongoose.model('User',User)