import Category from "../models/categories.js"
import Client from "../models/clients.js"
import database from "./database.js"
import Product from "../models/products.js"
import Supplier from "../models/suppliers.js"
import User from "../models/users.js"

export const syncAll = async () => {
    try {
        await User.sync({alter: true})
        await Category.sync({alter: true})
        await Supplier.sync({alter: true})
        await Product.sync({alter: true})
        await Client.sync({alter: true})
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
