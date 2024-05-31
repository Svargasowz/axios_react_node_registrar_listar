import Router from 'express'
import { listarEstudiantes,registrarEstudiante,eliminarEstudiante,actualizarEstudinate} from '../controllers/colegio.controller.js';
const rutaColegio=Router()

rutaColegio.get("/listar",listarEstudiantes)
rutaColegio.post("/registro",registrarEstudiante) 
rutaColegio.delete("/eliminar/:id",eliminarEstudiante)
rutaColegio.patch("/actualizar/:id",actualizarEstudinate)
export default rutaColegio;