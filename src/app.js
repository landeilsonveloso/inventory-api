import cors from "cors"
import express, { json, Router } from "express"
import productRouter from "./routes/products.js"
import saleRouter from "./routes/sales.js"
import userRouter from "./routes/users.js"

const router = Router()
const app = express()

app.use(cors())
app.use(json())

router.use("/users", userRouter)
router.use("/products", productRouter)
router.use("/sales", saleRouter)

app.use(router)

export default app
