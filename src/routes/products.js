import { create, destroy, findAll, update } from "../controllers/products.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const productRouter = Router()

productRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {name, description, cost, price, quantity} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 30) {
            return res.status(400).send("Campo nome deve conter entre 3 e 30 caracteres!")
        }
        
        else if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length > 30) {
            return res.status(400).send("Campo descrição deve conter no máximo 30 caracteres!")
        }

        else if (!cost) {
            return res.status(400).send("Campo custo obrigatório!")
        }

        else if (!price) {
            return res.status(400).send("Campo preço obrigatório!")
        }

        else if (!quantity) {
            return res.status(400).send("Campo quantidade obrigatório!")
        }
        
        await create(name, description, cost, price, quantity, userId)
        
        res.status(201).send("Produto cadastrado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

productRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const products = await findAll(userId)

        res.status(200).send(products)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

productRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.userId
        const {name, description, cost, price, quantity} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 30) {
            return res.status(400).send("Campo nome deve conter entre 3 e 30 caracteres!")
        }

        else if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length > 30) {
            return res.status(400).send("Campo descrição deve conter no máximo 30 caracteres!")
        }

        else if (!cost) {
            return res.status(400).send("Campo custo obrigatório!")
        }

        else if (!price) {
            return res.status(400).send("Campo preço obrigatório!")
        }

        else if (!quantity) {
            return res.status(400).send("Campo quantidade obrigatório!")
        }

        await update(id, name, description, cost, price, quantity, userId)

        res.status(200).send("Produto atualizado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

productRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Produto excluido com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default productRouter
