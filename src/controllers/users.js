import { hash } from "bcrypt"
import User from "../models/users.js"

export const create = async (name, email, password) => {
    try {
        const user = await User.findOne({where: {email}})
        
        if (user) {
            throw new Error("Usuário já cadastrado!")
        }
        
        password = await hash(password, 8)
        
        await User.create({name, email, password})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
