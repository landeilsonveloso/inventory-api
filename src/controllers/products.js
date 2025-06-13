import Inflow from "../models/inflows.js"
import Product from "../models/products.js"

export const create = async (name, description, cost, price, quantity, userId) => {
    try {
        const product = await Product.findOne({where: {name, userId}})
    
        if (product) {
            throw new Error("Produto já cadastrado!")
        }

        await Product.create({name, description, cost, price, quantity, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Product.findAll({order: [["name", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const sell = async (id, description, date, unitValue, quantity, method, totalValue, userId) => {
    try {
        const product = await Product.findByPk(id)

        if (product.quantity < 1 || product.quantity < quantity) {
            throw new Error("Não há produto suficiente no estoque!")
        }

        await Inflow.create({description, date, unitValue, quantity, method, totalValue, userId})

        await product.decrement("quantity", {by: product.quantity - quantity})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, name, description, cost, price, quantity, userId) => {
    try {
        const product = await Product.findOne({where: {name, userId}})

        if (product && id != product.id) {
            throw new Error("Produto já cadastrado!")
        }

        return await Product.update({name, description, cost, price, quantity}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Product.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
