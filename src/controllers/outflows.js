import Outflow from "../models/outflows.js"

export const create = async (description, date, unitValue, quantity, method, totalValue, userId) => {
    try {
        await Outflow.create({description, date, unitValue, quantity, method, totalValue, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Outflow.findAll({order: [["date", "DESC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, date, unitValue, quantity, method, totalValue) => {
    try {
        await Outflow.update({description, date, unitValue, quantity, method, totalValue}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Outflow.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
