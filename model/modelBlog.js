import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    id: { type: String, requiere: true, unique: true },
    titulo: { type: String, requiere: true, },
    descripcion: { type: String, requiere: true },
    contenido: { type: String, requiere: true, },
    imagen: { type: String, requiere: true, },
    fechaPublicacion: { type: Date, default: new Date},
    isHabilitado: {type: Boolean, default: true}
    //autor object.id
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog