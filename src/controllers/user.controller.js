import { pool } from '../db/db.js'

// GET | /users
export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM user')
    res.json({ message: rows })
  } catch (error) {
    const message = 'No se pudo acceder a la base de datos'
    res.status(500).json({ message })
  }
}

// POST | /add-user
export const addUser = async (req, res) => {
  const errorList = []
  // validate
  try {
    await validateUser(req.body, errorList)
  } catch (error) {
    errorList.push(error.message)
  }
  const message = { data: req.body, error: errorList }
  if (errorList.length) res.status(400).json(message)
  else {
    // add user
    req.body.role_id = 2
    const query = 'INSERT INTO user SET ?'
    try {
      const [rows] = await pool.execute(query, [req.body])
      res.json({ message: 'Usuario agregado con éxito', rows })
    } catch (error) {
      const message = 'Error al agregar el usuario a la base de datos'
      res.status(500).json({ message, error })
    }
  }
}

// validate user
async function validateUser (user, errorList) {
  // validate body
// validate received data
  validateUserLocal(user, errorList)
  // validate duplicates in database
  try {
    await validateUserDB(user, errorList)
  } catch (error) {
    throw new Error(error.message)
  }
}

// validate users in database
async function validateUserDB (user, errorList) {
// validate username
  if (!Object.keys(user).length) return
  let query = 'SELECT * FROM user WHERE username = ?'
  if (user.username) {
    try {
      const [rows] = await pool.execute(query, [user.username])
      const message = 'El nombre de usuario \'' + user.username +
      '\' ya exsiste'
      if (rows.length) errorList.push(message)
    } catch (error) {
      const message = 'No se pudo acceder a la base de datos' +
      ' para validar al usuario \'' + user.username + '\''
      throw new Error(message)
    }
  }
  // validate email
  if (user.email) {
    query = 'SELECT * FROM user WHERE email = ?'
    try {
      const [rows] = await pool.execute(query, [user.email])
      const message = `el coreo '${user.email}' ya existe`
      if (rows.length) errorList.push(message)
    } catch (error) {
      const message = 'No se pudo acceder a la base de datos' +
        ' para validar el correo \'' + user.email + '\''
      throw new Error(message)
    }
  }
}

// validate user local
function validateUserLocal (user, errorList) {
  if (!user.username) {
    errorList.push('a username is required')
  }
  if (!user.email) {
    errorList.push('an email is required')
  }
  if (!user.password) {
    errorList.push('a paassword is required')
  }
  if (!user.first_name) {
    errorList.push('a firast name is required')
  }
  if (!user.last_name) {
    errorList.push('a last name is required')
  }
  if (!user.country_id) {
    errorList.push('a acountry is required')
  }
  // validate email
  if (user.email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(user.email).toLowerCase())) {
      errorList.push('el correo \'' + user.email + '\' no es válido')
    }
  }
}
