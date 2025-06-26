import { create, destroy, findAll, update } from "../controllers/warranties.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const warrantyRouter = Router()

warrantyRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {client, description, value, date, time} = req.body

        if (!client) {
            return res.status(400).send("Campo cliente obrigatório!")
        }

        else if (client.length < 3 || client.length > 60) {
            return res.status(400).send("Campo cliente deve conter entre 3 e 60 caracteres!")
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

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!time) {
            return res.status(400).send("Campo tempo de garantia obrigatório!")
        }
        
        await create(client, description, value, date, time, userId)
        
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
        const {client, description, value, date, time} = req.body

        if (!client) {
            return res.status(400).send("Campo cliente obrigatório!")
        }

        else if (client.length < 3 || client.length > 60) {
            return res.status(400).send("Campo cliente deve conter entre 3 e 60 caracteres!")
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

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!time) {
            return res.status(400).send("Campo tempo de garantia obrigatório!")
        }
        
        await update(id, client, description, value, date, time)
        
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
