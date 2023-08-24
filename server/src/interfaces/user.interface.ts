export interface IUser {
    role: string
    email: string
    password: string
    fullName: string
    passport: string
    birthday?: Date
    city: string
    skills?: string[]
    phone: string
    tgLink?: string
    aboutMe?: string
}