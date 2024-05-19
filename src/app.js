import express from 'express'
import morgan from 'morgan'
// internal imports
import { PORT } from './config.js'
import removeHeader from './middleware.js'
// routes imports
import postRoutes from './routes/post.routes.js'
import userRoutes from './routes/user.routes.js'

// app config
const serverMessage = `Server running in port: ${PORT}`
const app = express()
app.use(morgan('dev'))
app.use(removeHeader('x-powered-by')) // remove express header
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.text())

app.use('/', express.static('dist'))

// routes
app.get('/isAlive', (req, res) => res.status(200)
  .json({ alive: true }))
app.use('/api/users', userRoutes)
app.use('/api', postRoutes)
app.use((req, res) => res.status(404)
  .json({ error: 'Not found' }))

// Error handler
app.use((err, req, res, next) => {
  console.log(err.message)
  console.log(serverMessage)
  res.status(err.status || 500)
    .json({ error: err.message || 'Internal server error' })
})

export default app
