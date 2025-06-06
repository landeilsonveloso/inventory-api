import Inflow from "../models/inflows.js"
import Outflow from "../models/outflows.js"
import Product from "../models/products.js"
import User from "../models/users.js"

export const syncAll = async () => {
    try {
        await User.sync({alter: true})
        await Product.sync({alter: true})
        await Inflow.sync({alter: true})
        await Outflow.sync({alter: true})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const dropAll = async () => {
    try {
        await Outflow.drop({force: true})
        await Inflow.drop({force: true})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
