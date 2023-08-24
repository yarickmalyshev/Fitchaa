import {Router} from 'express'
import {UserController} from '../controllers/index.js'

const router = Router()

router.post('/', UserController.createUser)

router.get('/data/:id', UserController.getUserData)

export default router