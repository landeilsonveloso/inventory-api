import Service from "../models/services.js"

export const create = async (description, value, userId) => {
    try {
        const service = await Service.findOne({where: {description, userId}})
    
        if (service) {
            throw new Error("Serviço já cadastrado!")
        }

        await Service.create({description, value, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Service.findAll({order: [["description", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, value, userId) => {
    try {
        const service = await Service.findOne({where: {description, userId}})

        if (service && id != service.id) {
            throw new Error("Serviço já cadastrado!")
        }

        await Service.update({description, value}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Service.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
