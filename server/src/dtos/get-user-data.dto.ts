export class GetUserDataDto {
    _id: string
    email: string
    role: string
    passport: string
    birthday?: string
    city?: string
    skills?: string[]
    phone: string
    tgLink: string
    aboutMe?: string
    constructor(userData) {
        this._id = userData._id
        this.email = userData.email
        this.role = userData.role
        this.passport = userData.passport
        this.birthday = userData?.birthday
        this.city = userData.city
        this.skills = userData?.skills
        this.phone = userData.phone
        this.tgLink = userData.tgLink
        this.aboutMe = userData?.aboutMe
    }
}