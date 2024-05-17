import express from 'express'
import { PORT } from './config.js'
import removeHeader from './middleware.js'
// routes imports
import categoryRoutes from './routes/category.routes.js'
import postRoutes from './routes/post.routes.js'
import userRoutes from './routes/user.routes.js'

// app config
const app = express()
app.use(removeHeader('x-powered-by')) // remove express header
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.text())

// routes
app.get('/isAlive', (req, res) => res.status(200)
  .json({ alive: true }))
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', postRoutes)

// run server
app.use((x, res) => res.status(404)
  .json({ error: 'Not found' }))
const message = `Server running in port: ${PORT}`
app.listen(3000, () => console.log(message))

// preguntas para la clase:
// - dotenv solo se instala para desarrollo?
// - conventions when adding foreign key restrictions
// - cómo compruebo que el cuerpo tenga un JSON válido
// - diferencia entre query() y execute()

// TODO: agregar archivo log de errores
// TODO: desplegar con https://render.com/
// TODO: agregar CORS
