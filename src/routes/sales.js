import { create, destroy, findAll, update } from "../controllers/sales.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const saleRouter = Router()

saleRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {description, date, value, method} = req.body

        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        else if (!method) {
            return res.status(400).send("Campo forma de pagamento obrigatório!")
        }
        
        await create(description, date, value, method, userId)
        
        res.status(201).send("Venda cadastrada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

saleRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const sales = await findAll(userId)

        res.status(200).send(sales)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

saleRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const {description, date, value, method} = req.body

        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        else if (!method) {
            return res.status(400).send("Campo forma de pagamento obrigatório!")
        }
        
        await update(id, description, date, value, method)
        
        res.status(201).send("Venda atualizada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

saleRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Venda excluida com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default saleRouter
