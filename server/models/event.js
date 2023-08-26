import mongoose from 'mongoose';


const Event = new mongoose.Schema({
    date:{type:Date,require:true},
    name:{type:String,require:true},
    title:{type:String,require:true}
})
export default mongoose.model('Event',Event)