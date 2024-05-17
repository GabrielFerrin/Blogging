import { pool } from '../../db/db.js'

// DELETE | /delete-user/:id
export const deleteUser = async (req, res) => {
  // validate parameter name
  let message = 'No se recibio el id del usuario'
  if (!req.params.id) res.status(400).json({ message })
  // delete user
  const { id } = req.params
  try {
    const query = 'DELETE FROM user WHERE user_id = ?'
    const [result] = await pool.execute(query, [id])
    if (!result.affectedRows) {
      res.status(404).json({ message: 'El usuario no existe' })
    } else res.sendStatus(204)
  } catch (error) {
    message = 'No se pudo acceder a la base de datos'
    res.status(500).json({ message })
  }
}
