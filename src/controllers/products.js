import Product from "../models/products.js"

export const create = async (description, cost, price, quantity, userId) => {
    try {
        const product = await Product.findOne({where: {description, userId}})
    
        if (product) {
            throw new Error("Produto já cadastrado!")
        }

        await Product.create({description, cost, price, quantity, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Product.findAll({order: [["description", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, cost, price, quantity, userId) => {
    try {
        const product = await Product.findOne({where: {description, userId}})

        if (product && id != product.id) {
            throw new Error("Produto já cadastrado!")
        }

        await Product.update({description, cost, price, quantity}, {where: {id}})
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
