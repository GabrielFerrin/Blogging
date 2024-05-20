import app from './app.js'
import { PORT } from './config.js'

const serverMessage = `Server running in port: ${PORT}`
app.listen(3000, () => console.log(serverMessage))

// preguntas para la clase:
// - conventions when adding foreign key restrictions
// - diferencia entre query() y execute()

// TODO: agregar archivo log de errores
// TODO: verificar si está bien lo del CORS
// TODO: agregar validación de correo repetido en update
