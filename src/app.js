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
app.use(userRoutes)
app.use(categoryRoutes)
app.use(postRoutes)

// run server
app.use((req, res) => res.status(404)
  .json({ error: 'Not found' }))
const message = `Server running in port: ${PORT}`
app.listen(3000, () => console.log(message))

// preguntas para la clase:
// - dotenv solo se instala para desarrollo?
// - conventions when adding foreign key restrictions
// - cómo valido que el cuerpo tenga un JSON válido

// TODO: agregar archivo log de errores
// TODO: desplegar con https://render.com/
