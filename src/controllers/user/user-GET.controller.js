import { pool } from '../../db/db.js'

// GET | /users
export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM user')
    return res.json({ message: rows })
  } catch (error) {
    const message = 'No se pudo acceder a la base de datos'
    return res.status(500).json({ message })
  }
}

// GET | /users/:id
export const getUserByID = async (req, res) => {
  // validate parameter name
  let message = 'No se recibió el id del usuario'
  if (!req.params.id) return res.status(400).json({ message })
  // get user
  const { id } = req.params
  try {
    const query = 'SELECT * FROM user WHERE user_id = ?'
    const [rows] = await pool.execute(query, [id])
    if (rows.length) return res.json({ message: rows[0] })
    else return res.status(404).json({ message: 'El usuario no existe' })
  } catch (error) {
    message = 'No se pudo acceder a la base de datos'
    return res.status(500).json({ message })
  }
}

export const getUserByUsername = async (req, res) => {
  // validate parameter name
  let message = 'No se recibió el username del usuario'
  if (!req.params.username) return res.status(400).json({ message })
  // get user
  const { username } = req.params
  try {
    const query = 'SELECT * FROM user WHERE username = ?'
    const [rows] = await pool.execute(query, [username])
    if (rows.length) return res.json({ message: rows[0] })
    else return res.status(404).json({ message: 'El usuario no existe' })
  } catch (error) {
    message = 'No se pudo acceder a la base de datos'
    return res.status(500).json({ message })
  }
}

export const getUserByEmail = async (req, res) => {
  // validate parameter name
  let message = 'No se recibió el email del usuario'
  if (!req.params.email) return res.status(400).json({ message })
  // get user
  const { email } = req.params
  try {
    const query = 'SELECT * FROM user WHERE email = ?'
    const [rows] = await pool.execute(query, [email])
    if (rows.length) return res.json({ message: rows[0] })
    else return res.status(404).json({ message: 'El usuario no existe' })
  } catch (error) {
    message = 'No se pudo acceder a la base de datos'
    return res.status(500).json({ message })
  }
}
