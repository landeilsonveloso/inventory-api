import Warranty from "../models/warranties.js"

export const create = async (consumer, description, value, date, time, userId) => {
    try {
        await Warranty.create({consumer, description, value, date, time, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        await Warranty.findAll({order: [["consumer", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, consumer, description, value, date, time) => {
    try {
        await Warranty.update({consumer, description, value, date, time}, {where: {id}})
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
