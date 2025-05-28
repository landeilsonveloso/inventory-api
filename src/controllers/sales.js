import Sale from "../models/sales.js"

export const create = async (description, date, value, method, userId) => {
    try {
        await Sale.create({description, date, value, method, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Sale.findAll({order: [["date", "DESC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, date, value, method) => {
    try {
        return await Sale.update({description, date, value, method}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Sale.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
