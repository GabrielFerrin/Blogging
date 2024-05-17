import { pool } from '../../db/db.js'

export const updateUser = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ message: 'Falta el id del usuario' })
  }
  // TODO: validate role id
  // TODI: validate country id
  const { id } = req.params
  // get keys for query
  const queryParams = Object.keys(req.body)
    .map(key => `${key} = ?`).join(', ')
  const query = `UPDATE user SET ${queryParams} WHERE user_id = ?`
  // values for query
  const values = [...Object.values(req.body), id]
  // execute query
  try {
    const [result] = await pool.execute(query, values)
    if (!result.affectedRows) {
      res.status(404).json({ message: 'El usuario no existe' })
    } else res.sendStatus(200)
  } catch (error) {
    const message = {
      message: 'No se pudo acceder a la base de datos',
      error
    }
    res.status(500).json({ message })
  }
}
