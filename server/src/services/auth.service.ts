import { compare, hash } from 'bcrypt'
import User from '../schemas/user.schema.js'
import tokenService from './token.service.js'
import { UserDto } from '../dtos/index.js'

interface Details {
    ua: string
    ip: string
}

class UserService {
    register = async (data, details: Details) => {
        const candidate = await User.findOne({ username: data.username })
        if (candidate) {
            throw new Error('Пользователь с таким username уже существует')
        }
        const hashedPassword = await hash(data.password, 4)
        const user = await User.create({ ...data, password: hashedPassword })

        return await this.responseData(user, details.ua, details.ip)
    }

    login = async (username: string, password: string, details: Details) => {
        const user = await User.findOne({ username })
        if (!user) {
            throw new Error('Пользователь с таким username не найден')
        }
        const comparePassword = await compare(password, user.password)
        if (!comparePassword) {
            throw new Error('Неверные данные при входе')
        }

        return await this.responseData(user, details.ua, details.ip)
    }

    logout = async (refreshToken: string) => {
        return await tokenService.removeToken(refreshToken)
    }

    refresh = async (refreshToken: string, details: Details) => {
        if (!refreshToken) {
            throw new Error()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw new Error
        }
        const user = await User.findById(userData['id'])

        return await this.responseData(user, details.ua, details.ip)
    }

    private responseData = async (user, ua: string, ip: string) => {
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(user.id, tokens.refreshToken, ua, ip)

        return {
            ...tokens,
            user: userDto,
        }
    }
}

export default new UserService()
