import Supplier from "../models/suppliers.js"

export const create = async (cnpjOrCpf, name, contact, userId) => {
    try {
        const supplier = await Supplier.findOne({where: {cnpjOrCpf, userId}})
    
        if (supplier) {
            throw new Error("Fornecedor já cadastrado!")
        }
    
        await Supplier.create({cnpjOrCpf, name, contact, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Supplier.findAll({ order: [["name", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, cnpjOrCpf, name, contact) => {
    try {
        const supplier = await Supplier.findOne({where: {name}})

        if (supplier && id != supplier.id) {
            throw new Error("Usuário já cadastrado!")
        }

        return await Supplier.update({cnpjOrCpf, name, contact}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Supplier.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
