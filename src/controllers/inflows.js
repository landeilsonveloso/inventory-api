import Inflow from "../models/inflows.js"

export const create = async (description, date, value, method, userId) => {
    try {
        await Inflow.create({description, date, value, method, userId})
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

export const update = async (id, description, date, value, method) => {
    try {
        return await Inflow.update({description, date, value, method}, {where: {id}})
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
