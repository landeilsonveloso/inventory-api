import { create, destroy, findAll, findAllInflows, findAlOutflows, update } from "../controllers/transactions.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const transactionRouter = Router()

transactionRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {name, date, type, method, value} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 60) {
            return res.status(400).send("Campo nome deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!type) {
            return res.status(400).send("Campo tipo obrigatório!")
        }

        else if (!method) {
            return res.status(400).send("Campo forma de pagamento obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor total obrigatório!")
        }
        
        await create(name, date, type, method, value, userId)
        
        res.status(201).send("Transação cadastrada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const transactions = await findAll(userId)

        res.status(200).send(transactions)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.get("/inflows", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const inflows = await findAllInflows(userId)

        res.status(200).send(inflows)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.get("/outflows", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const outflows = await findAlOutflows(userId)

        res.status(200).send(outflows)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

transactionRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.userId
        const {name, date, method, value} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 60) {
            return res.status(400).send("Campo nome deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!method) {
            return res.status(400).send("Campo forma de pagamento obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor total obrigatório!")
        }
        
        await update(id, name, date, method, value, userId)
        
        res.status(200).send("Transação atualizada com sucesso!")
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
