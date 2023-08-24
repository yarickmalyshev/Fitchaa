export interface IToken {
    userId: string
    refreshToken: string
    ua: string
    ip: string
    expiresIn: number
    createdAt: number
}