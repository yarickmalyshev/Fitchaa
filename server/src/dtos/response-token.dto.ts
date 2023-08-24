import { UserDto } from './user.dto.js'

export class ResponseTokenDto {
    user: UserDto
    token: string

    constructor(obj) {
        this.user = obj.user
        this.token = obj.accessToken
    }
}