import express from 'express'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

import {UserRouter, AuthRouter} from './routers/index.js'

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/TheFirstBase'
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/auth', AuthRouter)
app.use('/user', UserRouter)

connect(MONGO_URL)
    .then(() => app.listen(PORT, () => console.log(`Server has been started on ${PORT}`)))
    .catch((err) => console.log(err))