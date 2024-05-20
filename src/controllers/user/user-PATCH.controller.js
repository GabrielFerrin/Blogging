import { pool } from '../../db/db.js'
import { validateUserEmail } from './user-POST.controller.js'

export const updateUser = async (req, res) => {
  // validate parameter name
  let message = 'No se recibió el id del usuario'
  if (!req.params.id) return res.status(400).json({ message })
  // TODO: validate email
  if (req.body.email) {
    if (!validateUserEmail(req.body.email)) {
      message = 'El correo no es válido'
      return res.status(400).json({ message })
    }
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
      return res.status(404).json({ message: 'El usuario no existe' })
    } else return res.sendStatus(204)
  } catch (error) {
    const message = {
      message: 'No se pudo acceder a la base de datos',
      error
    }
    return res.status(500).json({ message })
  }
}
