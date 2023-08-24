import {User} from '../schemas/index.js'
import {GetUserDataDto} from '../dtos/index.js'

class AuthService {
    createUser = async(userData) => {
        let user = await User.findOne({email: userData.email})
        if (user) {
            user = {...user, ...userData}
            await user.save()
        } else {
            throw new Error('Такого user не существует')
        }
    }

    getUserData = async(id: string) => {
        const user = await User.findById(id)
        if (user) {
            return new GetUserDataDto(user)
        }
        else throw new Error('Такого пользователя не существует')
    }
}

export default new AuthService()