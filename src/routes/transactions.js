import { create, destroy, findAll, findInflows, findOutflows, update } from "../controllers/transactions.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const transactionRouter = Router()

transactionRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {description, date, value, method, type} = req.body

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
        
        await create(description, date, value, method, type, userId)
        
        res.status(201).send("Transação cadastrada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const trasactions = await findAll(userId)

        res.status(200).send(trasactions)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.get("/inflows", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const inflows = await findInflows(userId)

        res.status(200).send(inflows)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.get("/outflows", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const outflows = await findOutflows(userId)

        res.status(200).send(outflows)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})


transactionRouter.put("/:id", verifyToken, async (req, res) => {
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
        
        res.status(201).send("Transação atualizada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Transação excluida com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default transactionRouter
