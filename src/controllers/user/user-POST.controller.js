import { pool } from '../../db/db.js'

// POST | /add-user
export const addUser = async (req, res) => {
  const errorList = []
  // validate
  try {
    await validateUser(req.body, errorList)
  } catch (error) {
    errorList.push(error.message)
  }
  if (errorList.length) {
    const message = { target: req.body, error: errorList }
    return res.status(400).json(message)
  }
  // add user
  req.body.role_id = 2
  const query = 'INSERT INTO user SET ?'
  try {
    const [rows] = await pool.query(query, [req.body])
    const target = { id: rows.insertId, ...req.body }
    const message = {
      message: 'Usuario agregado con exito',
      target
    }
    return res.json(message)
  } catch (error) {
    const message = {
      user: req.body,
      message: 'Error al agregar el usuario a la base de datos',
      error
    }
    return res.status(500).json(message)
  }
}

// validate user
const validateUser = async (user, errorList) => {
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
const validateUserDB = async (user, errorList) => {
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
      const message = `el correo '${user.email}' ya existe`
      if (rows.length) errorList.push(message)
    } catch (error) {
      const message = 'No se pudo acceder a la base de datos' +
        ' para validar el correo \'' + user.email + '\''
      throw new Error(message)
    }
  }
}

// validate user local
const validateUserLocal = async (user, errorList) => {
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
    if (!validateUserEmail(user.email)) {
      errorList.push('el correo \'' + user.email + '\' no es válido')
    }
  }
}

export const validateUserEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

//  profile picture
export const getProfilePicture = async (req, res) => {
  res.send('OK')
}

export const getPdfFile = async (req, res) => {
  res.send('OK')
}
