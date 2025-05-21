import { create, findAll, update, destroy } from "../controllers/categories.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const categoryRouter = Router()

categoryRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const name = req.body.name

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 30) {
            return res.status(400).send("Campo nome deve conter entre 3 e 30 caracteres!")
        }

        await create(name, userId)

        return res.status(201).send("Categoria cadastrado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

categoryRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const categories = await findAll(userId)

        return res.status(200).send(categories)
    }
    
    catch (err) {
        return res.status(400).send(err.message) 
    }
})

categoryRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const name = req.body.name

        if (!name) {
            return res.status(400).send("Campo nome obrigatório!")
        }

        else if (name.length < 3 || name.length > 30) {
            return res.status(400).send("Campo nome deve conter entre 3 e 30 caracteres!")
        }

        await update(id, name)

        return res.status(200).send("Categoria atualizada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

categoryRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        return res.status(200).send("Categoria excluida com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default categoryRouter
