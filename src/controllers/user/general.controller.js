import { pool } from '../../db/db.js'

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

// GET | /users/:id
export const getUserByID = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ message: 'Falta el id del usuario' })
  }
  const { id } = req.params
  try {
    const query = 'SELECT * FROM user WHERE user_id = ?'
    const [rows] = await pool.execute(query, [id])
    if (rows.length) res.json({ message: rows[0] })
    else res.status(404).json({ message: 'El usuario no existe' })
  } catch (error) {
    const message = 'No se pudo acceder a la base de datos'
    res.status(500).json({ message })
  }
}

export const getUserByUsername = async (req, res) => {
  if (!req.params.username) {
    res.status(400).json({ message: 'Falta el id del usuario' })
  }
  const { username } = req.params
  try {
    const query = 'SELECT * FROM user WHERE username = ?'
    const [rows] = await pool.execute(query, [username])
    if (rows.length) res.json({ message: rows[0] })
    else res.status(404).json({ message: 'El usuario no existe' })
  } catch (error) {
    const message = 'No se pudo acceder a la base de datos'
    res.status(500).json({ message })
  }
}

export const getUserByEmail = async (req, res) => {
  if (!req.params.email) {
    res.status(400).json({ message: 'Falta el email del usuario' })
  }
  const { email } = req.params
  try {
    const query = 'SELECT * FROM user WHERE email = ?'
    const [rows] = await pool.execute(query, [email])
    if (rows.length) res.json({ message: rows[0] })
    else res.status(404).json({ message: 'El usuario no existe' })
  } catch (error) {
    const message = 'No se pudo acceder a la base de datos'
    res.status(500).json({ message })
  }
}
