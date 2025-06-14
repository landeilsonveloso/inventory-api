import Inflow from "../models/inflows.js"
import Product from "../models/products.js"

export const create = async (description, date, unitValue, quantity, method, totalValue, userId) => {
    try {
        await Inflow.create({description, date, unitValue, quantity, method, totalValue, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Inflow.findAll({order: [["date", "DESC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, date, unitValue, quantity, method, totalValue) => {
    try {
        const inflow = await Inflow.findByPk(id)

        await Inflow.update({description, date, unitValue, quantity, method, totalValue}, {where: {id}})

        const product = await Product.findOne({where: {name: description, userId}})

        if (product) {
            if (inflow.quantity < quantity) {
                if (product.quantity - (quantity - inflow.quantity) >= 0) {
                    await product.decrement("quantity", {by: quantity - inflow.quantity})
                }

                else {
                    throw new Error("Não há produto suficiente no estoque!")
                }
            }

            else {
                await product.increment("quantity", {by: inflow.quantity - quantity})
            }
        }
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Inflow.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
