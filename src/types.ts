export interface User {
    id: number,
    username: string,
    password: string,
    email: string
}

export interface DevilFruits {
    id?: number,
    name: string,
    image: string,
    description: string,
    type: string,
    user: string
    author?: string
}