import express from "express"
import cors from "cors"
import productRouter from "./routes/product.routes.js"

// express initial
const app = express()


// middleware configuration
app.use(cors())
app.use(express.json())


// test check
app.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is runing seccessfully!"
  })
})


app.use("/api/v1/products", productRouter)

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error"
  })
})


export default app
