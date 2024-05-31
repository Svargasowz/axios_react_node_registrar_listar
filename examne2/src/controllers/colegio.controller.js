import { pool } from "../database/conexion.js";


export const listarEstudiantes=async(req,res)=>{
    try{
        const [rows]=await pool.query('SELECT * FROM estudiante')
        if(rows.length>0){
            res.status(200).json(rows)
        }else{
            res.status(404).json({
                message:'No se encontraron registros'
            })
        }
    }catch(e){
        res.status(500).json({
            message:'error en el servidor'+e
        })
    }
}
export const registrarEstudiante=async(req,res)=>{
    try{
        const {id,nombre,nota1,nota2}=req.body
        const [rows]=await pool.query('INSERT INTO estudiante(id,nombre,nota1,nota2) VALUES(?,?,?,?)',[id,nombre,nota1,nota2])
        if(rows.affectedRows>0){
            res.status(200).json({
                message:'Registro exitoso'
            })
        }
    }catch(e){
        res.status(500).json({
            message:'error en el servidor'+e
        })
    }
}
export const eliminarEstudiante=async(req,res)=>{
    try{
        const {id}=req.params
        const [rows]=await pool.query('DELETE FROM estudiante WHERE id=?',[id])
        if(rows.affectedRows>0){
            res.status(200).json({
                message:'Registro eliminado'
            })
        }else{
            res.status(404).json({
                message:'No se encontraron registros con ese id'
            })
        }
    }catch(e){
        res.status(500).json({
            message:'error en el servidor'+e
        })
    }
}
export const actualizarEstudinate=async(req,res)=>{
    try{
        const {id}=req.params
        const {nombre,nota1,nota2}=req.body
        const [rows]=await pool.query('UPDATE estudiante SET nombre=IFNULL(?,nombre),nota1=IFNULL(?,nota1),nota2=IFNULL(?,nota2) WHERE id=?',[nombre,nota1,nota2,id])
        if(rows.affectedRows>0){
            res.status(200).json({
                message:'Registro actualizado'
            })
        }else{
            res.status(404).json({
                message:'No se encontraron registros con ese id'
            })
        }
    }catch(e){
        res.status(500).json({
            message:'error en el servidor'+e
        })
    }
}