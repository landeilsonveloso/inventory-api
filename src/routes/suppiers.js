import { create, destroy, findAll, update } from "../controllers/suppliers.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const supplierRouter = Router()

supplierRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {cnpjOrCpf, name, contact} = req.body

        if (!cnpjOrCpf) {
            return res.status(400).send("Campo CNPJ/CPF obrigatório!")
        }

        else if (cnpjOrCpf.length < 11 || cnpjOrCpf.length > 14) {
            return res.status(400).send("Campo CNPJ/CPF deve conter entre 11 e 14 caracteres!")
        }

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 30) {
            return res.status(400).send("Campo nome deve conter entre 3 e 30 caracteres!")
        }

        else if (!contact) {
            return res.status(400).send("Campo contato obrigatório!")
        }

        else if (contact.length < 8 || contact.length > 25) {
            return res.status(400).send("Campo contato deve conter entre 8 e 25 caracteres!")
        }

        await create(cnpjOrCpf,name, contact, userId)

        res.status(201).send("Fornecedor cadastrado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

supplierRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const suppliers = await findAll(userId)

        res.status(201).send(suppliers)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

supplierRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const {cnpjOrCpf, name, contact} = req.body

        if (!cnpjOrCpf) {
            return res.status(400).send("Campo CNPJ/CPF obrigatório!")
        }

        else if (cnpjOrCpf.length < 11 || cnpjOrCpf.length > 14) {
            return res.status(400).send("Campo CNPJ/CPF deve conter entre 11 e 14 caracteres!")
        }

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 30) {
            return res.status(400).send("Campo nome deve conter entre 3 e 30 caracteres!")
        }

        else if (!contact) {
            return res.status(400).send("Campo contato obrigatório!")
        }

        else if (contact.length < 8 || contact.length > 25) {
            return res.status(400).send("Campo contato deve conter entre 8 e 25 caracteres!")
        }

        await update(id, cnpjOrCpf, name, contact)

        res.status(201).send("Fornecedor atualizado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

supplierRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(201).send("Fornecedor excluido com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default supplierRouter
