import { NextFunction, Request, Response } from 'express'
import {AuthService} from '../services/index.js'
import { ResponseTokenDto } from '../dtos/index.js'

export const maxAge = 30 * 24 * 60 * 60 * 1000

export class AuthController {
    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const details = { ua: req.get('User-Agent'), ip: req.ip }
            const data = req.body

            const userData = await AuthService.register(data, details)
            await this.resCookieRefreshToken(res, userData.refreshToken)
            return res.json(new ResponseTokenDto(userData))
        } catch (err) {
            next(err)
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const details = { ua: req.get('User-Agent'), ip: req.ip }
            const { username, password } = req.body

            const userData = await AuthService.login(username, password, details)
            await this.resCookieRefreshToken(res, userData.refreshToken)
            return res.json(new ResponseTokenDto(userData))
        } catch (err) {
            next(err)
        }
    }

    logout = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { refreshToken } = req.cookies
            const token = await AuthService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (err) {
            next(err)
        }
    }

    refresh = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const details = { ua: req.get('User-Agent'), ip: req.ip }
            const { refreshToken } = req.cookies

            const userData = await AuthService.refresh(refreshToken, details)
            await this.resCookieRefreshToken(res, userData.refreshToken)
            return res.json(new ResponseTokenDto(userData))
        } catch (err) {
            next(err)
        }
    }

    private resCookieRefreshToken = async (res: Response, refreshToken: string) => {
        await res.cookie('refreshToken', refreshToken, { maxAge: maxAge, httpOnly: true, path: '/api/auth' })
    }
}

export default new AuthController()