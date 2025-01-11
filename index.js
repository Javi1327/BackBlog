import express from "express"
import cors from "cors"   // npm i cors
import env from "dotenv"  //npm i dotenv
import mongoose from "mongoose"    // nmp i mongosse
import routerBlog from "./router/routerBlog.js"
import routerAutor from "./router/routerAutor.js";
import routerUsuario from "./router/routerUsuario.js"
import { authMiddleware } from "./middleware/authmiddleware.js"

env.config()
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: "*",
        allowedHeaders: ["content-Type", "Authorization","x-refresh-token"],
    }
))

app.use("/blogs", routerBlog)
app.use("/autores", routerAutor);
app.use("/auth", routerUsuario)

app.use("/protected",authMiddleware, (req, res) => {
    res.json({ message: "Acceso permitido", user: req.user })
})


app.use((req,res) => {
    res.status(404).send.apply("<h1>404</h1>")
})

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((error) => {
    console.error("Error connection to MongoDB:", error)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})