import Inflow from "../models/inflows.js"

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
        return await Inflow.update({description, date, unitValue, quantity, method, totalValue}, {where: {id}})
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
