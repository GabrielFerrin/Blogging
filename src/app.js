import express from 'express'
import morgan from 'morgan'
// routes
import userRoutes from './routes/user.routes.js'
import { validateOrigin } from './helpers.js'

// app config
const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true })) // enables body parsing
app.use(express.json())
app.use(express.text())
app.use(validateOrigin)

// routes
app.get('/api/isAlive', (req, res) =>
  res.status(200).send({ alive: true }))
app.use('/api/users', userRoutes)

app.use('*', (req, res) =>
  res.status(404).send({ error: 'Incorrect route' }))

export default app
