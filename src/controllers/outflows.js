import Outflow from "../models/outflows.js"

export const create = async (description, date, value, method, userId) => {
    try {
        await Outflow.create({description, date, value, method, userId})
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

export const update = async (id, description, date, value, method) => {
    try {
        return await Outflow.update({description, date, value, method}, {where: {id}})
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
