import {Request, Response, NextFunction} from 'express'
import {UserService} from '../services/index.js'

class UserController {
    createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userBody = req.body

            await UserService.createUser(userBody)

            res.status(201).json({message: 'User успешно создан'})
        } catch (err) {
            throw err
        }
    }

    getUserData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params

            const userData = await UserService.getUserData(id)

            res.json({data: userData, message: 'Данные успешно получены'})
        } catch (err) {
            throw err
        }
    }
}

export default new UserController()