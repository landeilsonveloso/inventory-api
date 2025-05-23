import cors from "cors"
import express, { json, Router } from "express"
import supplierRouter from "./routes/suppiers.js"
import userRouter from "./routes/users.js"

const router = Router()
const app = express()

app.use(cors())
app.use(json())

router.use("/users", userRouter)
router.use("/suppiers", supplierRouter)

app.use(router)

export default app
