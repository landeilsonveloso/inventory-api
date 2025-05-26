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

export const update = async (id, name, description, cost, price, quantity) => {
    try {
        const product = await Product.findOne({where: {name}})

        console.log(product)

        if (product && id != product.id) {
            throw new Error("Usuário já cadastrado!")
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
