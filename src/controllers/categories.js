import Category from "../models/categories.js"

export const create = async (name, userId) => {
    try {
        const category = await Category.findOne({where: {name, userId}})

        if (category) {
            throw new Error("Categoria já cadastrada!")
        }

        await Category.create({name, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Category.findAll({order: [["name", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, name) => {
    try {
        return await Category.update({name}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Category.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
