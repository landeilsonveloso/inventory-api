import { create, destroy, findAll, update } from "../controllers/products.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const serviceRouter = Router()

serviceRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {name, value} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 60) {
            return res.status(400).send("Campo nome deve conter entre 3 e 60 caracteres!")
        }
        
        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }
        
        await create(name, value, userId)
        
        res.status(201).send("Serviço cadastrado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

serviceRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const services = await findAll(userId)

        res.status(200).send(services)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

serviceRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.userId
        const {name, value} = req.body

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 60) {
            return res.status(400).send("Campo nome deve conter entre 3 e 60 caracteres!")
        }
        
        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }
        
        await update(id, name, value, userId)
        
        res.status(200).send("Serviço atualizado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

serviceRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Serviço excluido com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default serviceRouter
