import Category from "../models/categories.js"
import database from "./database.js"
import User from "../models/users.js"

export const syncAll = async () => {
    try {
        await User.sync({alter: true})
        await Category.sync({alter: true})
    }
    
    catch (error) {
        console.error(error.message)
    }
}

export const dropAll = async () => {
    try {
        await database.drop()
    }
    
    catch (error) {
        console.log(error)
    }
}
