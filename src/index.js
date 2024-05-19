import app from './app.js'
import {} from './routes/user.routes.js'

const PORT = 3000

const serverMessage = `Server running in port: ${PORT}`
app.listen(3000, () => console.log(serverMessage))

// preguntas para la clase:
// - dotenv solo se instala para desarrollo?
// - conventions when adding foreign key restrictions
// - diferencia entre query() y execute()

// TODO: agregar archivo log de errores
// TODO: desplegar con https://render.com/
// TODO: agregar CORS
