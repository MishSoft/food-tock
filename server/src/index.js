import app from "./app.js"


// define port
const PORT = process.env.PORT || 5000


// server run function
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is runing on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log("Failed to start server: ", error)
    process.exit(1)
  }
}

startServer()
