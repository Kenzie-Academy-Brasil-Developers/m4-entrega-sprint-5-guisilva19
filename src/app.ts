import "reflect-metadata"
import "express-async-errors"
import express from "express"
// import userRoutes from "./routes/user/userRoutes"
import handleErrorsMiddleware from "./middleware/handleErrors.middleware"
import { appRoutes } from "./routes/routes"


const app = express()
app.use(express.json())
appRoutes(app)
// app.use(userRoutes)
app.use(handleErrorsMiddleware)

export default app