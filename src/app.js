import express from 'express'
// import morgan from 'morgan'
// internal imports

// app config
// const serverMessage = `Server running in port: ???`
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
