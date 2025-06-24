import Warranty from "../models/warranties.js"

export const create = async (consumer, description, value, date, time, status, userId) => {
    try {
        await Warranty.create({consumer, description, value, date, time, status, userId})
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

export const update = async (id, consumer, description, value, date, time, status) => {
    try {
        await Warranty.update({consumer, description, value, date, time, status}, {where: {id}})
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
