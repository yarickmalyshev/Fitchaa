export class UserDto {
    _id: string
    username: string
    fullName: string
    role: string

    constructor(model) {
        this._id = model._id
        this.username = model.username
        this.role = model.role
        this.fullName = model.fullName
    }
}
