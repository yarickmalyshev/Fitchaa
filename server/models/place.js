import mongoose from 'mongoose';


const Place =new mongoose.Schema({
    id:{type: String, require: true,unique:true},
    grade:[],
    title:{type:String,require: true},
    name:{type:String,require:true}
})
export default mongoose.model('Place',Place)
