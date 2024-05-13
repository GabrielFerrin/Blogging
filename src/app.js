import express from 'express'
import { PORT } from './config.js'
// routes imports
import categoryRoutes from './routes/category.routes.js'

// app config
const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/isAlive', (req, res) => res.status(200).json({ alive: true }))
app.use(categoryRoutes)

// server
app.use((req, res) => res.status(404).json({ error: 'Not found' }))
const message = `Server running in port: ${PORT}`
app.listen(3000, () => console.log(message))
