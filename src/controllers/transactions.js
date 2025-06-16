import Transaction from "../models/transactions.js"

export const create = async (name, date, type, method, value, userId) => {
    try {
        await Transaction.create({name, date, type, method, value, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Transaction.findAll({order: [["date", "DESC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAllInflows = async (userId) => {
    try {
        return await Transaction.findAll({order: [["date", "DESC"]], where: {type: "Entrada", userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAlOutflows = async (userId) => {
    try {
        return await Transaction.findAll({order: [["date", "DESC"]], where: {type: "Saída", userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, name, date, method, value) => {
    try {
        await Transaction.update({name, date, method, value}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Transaction.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
