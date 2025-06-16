import cors from "cors"
import express, { json, Router } from "express"
import productRouter from "./routes/products.js"
import serviceRouter from "./routes/services.js"
import transactionRouter from "./routes/transactions.js"
import userRouter from "./routes/users.js"

const router = Router()
const app = express()

app.use(cors())
app.use(json())

router.use("/users", userRouter)
router.use("/products", productRouter)
router.use("/services", serviceRouter)
router.use("/transactions", transactionRouter)

app.use(router)

export default app
