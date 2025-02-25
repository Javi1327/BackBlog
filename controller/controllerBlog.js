import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog, getBlogPopulado } from "../service/serviceBlog.js"

export const getblogscontroller = async (req, res) => {
    try {
        const blogs = await getBlogs()
        if(blogs.length === 0){
            return res.status(400).json({status: "error", menssage: "blogs no encontrados", data:{}})        
        }
        return res.status(200).json({status: "success", menssage: "blogs obtenidos", data:blogs})
    } catch (error) {
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}})        
    }
}


export const getblogcontroller = async (req, res) => {
    try {
        const id = req.params.id
        const blog = await getBlog(id)
        if(!blog){
            return res.status(400).json({status: "error", menssage: "blog no encontrado", data:{}})        
        }
        return res.status(200).json({status: "success", menssage: "blog obtenido", data:blog})
    } catch (error) {
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}})        
    }
}


export const getblogPopuladocontroller = async (req, res) => {
    try {
        const id = req.params.id
        const blog = await getBlogPopulado(id)
        if(!blog){
            return res.status(400).json({status: "error", menssage: "blog no encontrado", data:{}})        
        }
        return res.status(200).json({status: "success", menssage: "blog obtenido", data:blog})
    } catch (error) {
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}})        
    }
}


export const createblogcontroller = async (req, res) => {
    try {
        const {titulo,descripcion,contenido,imagen} = req.body 

        if(!titulo || !descripcion || !contenido || !imagen){
            return res.status(400).json({status: "error", menssage: "faltan datos", data:{}})
        }  

        const nuevoBlog = await createBlog(titulo,descripcion,contenido,imagen)

        if(nuevoBlog){
            return res.status(201).json({status: "success", menssage: "blog creado", data:nuevoBlog})
        }else{
            return res.status(400).json({status: "error", menssage: "Blog no creado", data:{}})
        }  

    } catch (error) {
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}})        
    }
}


export const updateblogcontroller = async (req, res) => {
    try {
        const id = req.params.id
        const {titulo,descripcion,contenido,imagen} = req.body 

        if(!titulo || !descripcion || !contenido || !imagen){ // nose actulaza el autor
            return res.status(400).json({status: "error", menssage: "faltan datos", data:{}})
        }   

        let blogActualizado = await updateBlog(id,titulo,descripcion,contenido,imagen)

        if(blogActualizado){
            blogActualizado = await getBlog(id) // para q m muestre el blog actualizado
            return res.status(200).json({status: "success", menssage: "blog Actualizado", data:blogActualizado})
        }else{
            return res.status(400).json({status: "error", menssage: "blog no actualizado", data:{}})
        }

    } catch (error) {
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}})        
    }
}


export const deleteblogcontroller = async (req, res) => {
    try {
        const id = req.params.id  
        let blogEliminado = await deleteBlog(id) 

        if(blogEliminado){
            blogEliminado = await getBlog(id)
            return res.status(200).json({status: "success", menssage: "blog Eliminado", data:blogEliminado})
        }else{
            return res.status(400).json({status: "error", menssage: "blog no eliminado", data:{}})
        }    

    } catch (error) {
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}})        
    }
}