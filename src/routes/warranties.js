import { create, destroy, findAll, update } from "../controllers/warranties.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const warrantyRouter = Router()

warrantyRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {consumer, description, value, startDate, endDate, status} = req.body

        if (!consumer) {
            return res.status(400).send("Campo consumidor obrigatório!")
        }

        else if (consumer.length < 3 || consumer.length > 60) {
            return res.status(400).send("Campo consumidor deve conter entre 3 e 60 caracteres!")
        }

        else if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        else if (!startDate) {
            return res.status(400).send("Campo data de compra obrigatório!")
        }

        else if (!endDate) {
            return res.status(400).send("Campo data de vencimento obrigatório!")
        }

        else if (!status) {
            return res.status(400).send("Campo estado obrigatório!")
        }
        
        await create(consumer, description, value, startDate, endDate, status, userId)
        
        res.status(201).send("Garantia cadastrada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

warrantyRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const warranties = await findAll(userId)

        res.status(200).send(warranties)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

warrantyRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const {consumer, description, value, startDate, endDate, status} = req.body

        if (!consumer) {
            return res.status(400).send("Campo consumidor obrigatório!")
        }

        else if (consumer.length < 3 || consumer.length > 60) {
            return res.status(400).send("Campo consumidor deve conter entre 3 e 60 caracteres!")
        }

        else if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        else if (!startDate) {
            return res.status(400).send("Campo data de compra obrigatório!")
        }

        else if (!endDate) {
            return res.status(400).send("Campo data de vencimento obrigatório!")
        }

        else if (!status) {
            return res.status(400).send("Campo estado obrigatório!")
        }
        
        await update(id, consumer, description, value, startDate, endDate, status)
        
        res.status(200).send("Garantia atualizada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

warrantyRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Garantia excluida com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default warrantyRouter
