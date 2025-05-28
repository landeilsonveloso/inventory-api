import Transaction from "../models/transactions.js"

export const create = async (description, date, value, method, type, userId) => {
    try {
        await Transaction.create({description, date, value, method, type, userId})
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

export const findInflows = async (userId) => {
    try {
        return await Transaction.findAll({order: [["date", "DESC"]], where: {type: "Entrada", userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findOutflows = async (userId) => {
    try {
        return await Transaction.findAll({order: [["date", "DESC"]], where: {type: "Saída", userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, date, value, method) => {
    try {
        return await Transaction.update({description, date, value, method}, {where: {id}})
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
