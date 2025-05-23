import database from "./database.js"
import Product from "../models/products.js"
import Supplier from "../models/suppliers.js"
import User from "../models/users.js"

export const syncAll = async () => {
    try {
        await User.sync({alter: true})
        await Supplier.sync({alter: true})
        await Product.sync({alter: true})
    }
    
    catch (error) {
        console.error(error.message)
    }
}

export const dropAll = async () => {
    try {
        await Product.drop({alter: true})
        await Supplier.drop({alter: true})
        await User.drop({alter: true})
    }
    
    catch (error) {
        console.log(error)
    }
}
