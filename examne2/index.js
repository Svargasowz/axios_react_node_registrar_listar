import express from 'express'
import colegio from './src/routes/colegio.routes.js'
import cors from 'cors'

const app = express()
const port=3000
app.use(express.json())
app.use(cors())
app.use(colegio)
app.listen(port,()=>{
    console.log('server funcionando 🙈🚂')
})