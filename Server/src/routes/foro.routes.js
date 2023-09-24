import { Router } from "express";
import { ctrlCreateForo, ctrlDeleteForo, ctrlGetForo, ctrlUpdateForo, ctrlView } from "../controllers/foro.controllers.js";
import { createForoSchema, editForoSchema } from "../models/schemas/foro.schema.js";
import { validator } from "../middlewares/validator.js";
import { ForoModel } from "../models/Foro.js";


const foroRouter = Router();

//Ruta para la vista
foroRouter.get('/foro', ctrlView)

//endpoint para traer todas las entradas
foroRouter.get('/api/foro', ctrlGetForo)

//endpoint para crear una entrada
foroRouter.post('/api/foro', createForoSchema, validator, ctrlCreateForo)

//endpoint para modificar una entradas
foroRouter.put('/api/foro/:id', editForoSchema, validator, ctrlUpdateForo)

//endpoint para eliminar una entradas
foroRouter.delete('/api/foro/:id', ctrlDeleteForo)

export { foroRouter }