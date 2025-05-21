import categoryRouter from "./routes/categories.js"
import cors from "cors"
import express, { json, Router } from "express"
import userRouter from "./routes/users.js"

const router = Router()
const app = express()

app.use(cors())
app.use(json())

router.use("/users", userRouter)
router.use("/categories", categoryRouter)

app.use(router)

export default app
