import Router from 'express'
import {
  getUsers,
  getUserByID,
  getUserByUsername,
  getUserByEmail
} from '../controllers/user/user-general.controller.js'
import { addUser } from '../controllers/user/user-add.controller.js'
import { deleteUser } from '../controllers/user/user-delete.controller.js'
import { updateUser } from '../controllers/user/user-update.controller.js'

const router = Router()

// GET
router.get('/users', getUsers)
router.get('/get-user/:id', getUserByID)
router.get('/get-user-username/:username', getUserByUsername)
router.get('/get-user-email/:email', getUserByEmail)
// POST
router.post('/add-user', addUser)
// PATCH
router.patch('/update-user/:id', updateUser)
// DELETE
router.delete('/delete-user/:id', deleteUser)

export default router
