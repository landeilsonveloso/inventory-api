import { create, destroy, findAll, update } from "../controllers/products.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const productRouter = Router()

productRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {description, value, quantity} = req.body
        
        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        else if (!quantity) {
            return res.status(400).send("Campo quantidade obrigatório!")
        }
        
        await create(description, value, quantity, userId)
        
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
        const {description, value, quantity} = req.body
        
        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        else if (!quantity) {
            return res.status(400).send("Campo quantidade obrigatório!")
        }

        await update(id, description, value, quantity, userId)

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
