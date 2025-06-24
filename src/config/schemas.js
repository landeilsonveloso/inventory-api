import Inflow from "../models/inflows.js"
import Outflow from "../models/outflows.js"
import Product from "../models/products.js"
import Service from "../models/services.js"
import User from "../models/users.js"
import Warranty from "../models/warranties.js"

export const syncAll = async () => {
    try {
        await User.sync({alter: true})
        await Product.sync({alter: true})
        await Service.sync({alter: true})
        await Inflow.sync({alter: true})
        await Outflow.sync({alter: true})
        await Warranty.sync({alter: true})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const dropAll = async () => {
    try {
        await Warranty.drop({force: true})
        await Outflow.drop({force: true})
        await Inflow.drop({force: true})
        await Service.drop({force: true})
        await Product.drop({force: true})
        await User.drop({force: true})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
