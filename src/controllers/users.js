import env_config from "../config/config.js"
import { compare, hash } from "bcrypt"
import jwt from "jsonwebtoken"
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

export const signIn = async (email, password) => {
    try {
        const user = await User.findOne({where: {email}})
        
        if (!user) {
            throw new Error("Usuário não cadastrado!")
        }
        
        const isMatch = await compare(password, user.password)

        if (!isMatch) {
            throw new Error("Senha inválida!")
        }
        
        return jwt.sign({userId: user.id}, env_config.JWT_SECRET, {expiresIn: "6d"})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
