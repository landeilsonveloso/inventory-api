import Product from "../models/products.js"
import Transaction from "../models/transactions.js"
import User from "../models/users.js"

export const syncAll = async () => {
    try {
        await User.sync({alter: true})
        await Product.sync({alter: true})
        await Transaction.sync({alter: true})
    }
    
    catch (error) {
        console.error(error.message)
    }
}

export const dropAll = async () => {
    try {
        await Transaction.sync({alter: true})
        await Product.drop({alter: true})
        await User.drop({alter: true})
    }
    
    catch (error) {
        console.log(error)
    }
}
