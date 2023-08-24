import { Router } from 'express'
import {AuthController} from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', new AuthController().register)

router.post('/login', new AuthController().login)

router.post('/logout', new AuthController().logout)

router.get('/refresh', new AuthController().refresh)

export default router
