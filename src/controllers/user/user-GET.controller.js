import { pool } from '../../db/db.js'

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1')
    return res.send(rows)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
