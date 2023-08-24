import {Schema, model} from 'mongoose'
import {IUser} from '../interfaces/index.js'

const schema = new Schema<IUser>({
    role: {type: String, default: 'sportsman'},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    fullName: {type: String},
    passport: {type: String},
    birthday: {type: Date, default: Date.now()},
    city: {type: String},
    phone: {type: String},
    tgLink: {type: String},
    aboutMe: {type: String},
})

export default model('User', schema)