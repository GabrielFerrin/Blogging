import Router from 'express'
import {
  getUsers,
  getUserByID,
  getUserByUsername,
  getUserByEmail
} from '../controllers/user/general.controller.js'
import { addUser } from '../controllers/user/add-user.controller.js'
import { deleteUser } from '../controllers/user/delete-user.controller.js'

const router = Router()

// GET
router.get('/users', getUsers)
router.get('/get-user/:id', getUserByID)
router.get('/get-user-username/:username', getUserByUsername)
router.get('/get-user-email/:email', getUserByEmail)
// POST
router.post('/add-user', addUser)
// DELETE
router.delete('/delete-user/:id', deleteUser)

export default router
