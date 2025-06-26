import Warranty from "../models/warranties.js"

export const create = async (client, description, value, date, time, userId) => {
    try {
        await Warranty.create({client, description, value, date, time, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Warranty.findAll({order: [["client", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, client, description, value, date, time) => {
    try {
        await Warranty.update({client, description, value, date, time}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Warranty.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
