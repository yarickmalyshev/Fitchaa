import mongoose from 'mongoose';


const Business = new mongoose.Schema({
    login:{type:String,require:true},
    number:{type:Number,require:true},
    subscriber:{type:Boolean}
})
export default mongoose.model('Business',Business)