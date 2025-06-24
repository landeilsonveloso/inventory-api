import cors from "cors"
import express, { json, Router } from "express"
import inflowRouter from "./routes/inflows.js"
import outflowRouter from "./routes/outflows.js"
import productRouter from "./routes/products.js"
import serviceRouter from "./routes/services.js"
import userRouter from "./routes/users.js"
import warrantyRouter from "./routes/warranties.js"

const router = Router()
const app = express()

app.use(cors())
app.use(json())

router.use("/users", userRouter)
router.use("/products", productRouter)
router.use("/services", serviceRouter)
router.use("/inflows", inflowRouter)
router.use("/outflows", outflowRouter)
router.use("/warranties", warrantyRouter)

app.use(router)

export default app
