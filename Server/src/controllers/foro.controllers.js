import { ForoModel } from "../models/Foro.js";

ForoModel

//Controlador para mostrar la vista
export const ctrlView = (req, res) => {
    res.render('index.ejs')
}

// controlador para traer las Entradas del foro
export const ctrlGetForo = async (req, res) =>  {
    try {
        const foro = await ForoModel.findAll();
        if (!foro) return res.status(404)
        return res.status(200).json(foro)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }

}
// controlador para crear  las Entradas del foro
export const ctrlCreateForo = async (req, res) =>  {
    try {
        const newForo = await ForoModel.create(req.body);
        return res.status(201).json(newForo)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

// controlador para modificar las Entradas del foro
export const ctrlUpdateForo = async (req, res) =>  {
    const { id } = req.params
    try {
            const foro = await ForoModel.findByPk(id)
            if (!foro) {
                return res.status(404).json({
                    message: 'Tarea no encontrada'
                })
            }
            task.update(req.body)
            return res.status(200).json(task)
        
    } catch (error) {   
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })     
}
}

// controlador para eliminar las Entradas del foro
export const ctrlDeleteForo = async (req, res) =>  {
    const { id } = req.params
    try {
        const foroDeleted = await ForoModel.destroy({
             where : {
                id : id
             }
            })
            if (!foroDeleted) {
                return res.status(404).json({
                    message: 'Entrada no encontrada'
                })
            }
            return res.status(200).json({
                message: 'Foro Eliminado'
            })
    } catch (error) {   
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })     
    }
}

