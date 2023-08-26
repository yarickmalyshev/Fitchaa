import mongoose from 'mongoose';


const Post = new mongoose.Schema({
    title:{type:String,require:true},
    counter:{type:Number,require:true},
    creatorId:{type:Number,require:true,unique:true}
})
export default mongoose.model('Post',Post)