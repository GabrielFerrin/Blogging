import Router from 'express'
import {
  getUsers,
  getUserByID,
  getUserByUsername,
  getUserByEmail
} from '../controllers/user/user-GET.controller.js'
import { addUser } from '../controllers/user/user-POST.controller.js'
import { deleteUser } from '../controllers/user/user-DELETE.controller.js'
import { updateUser } from '../controllers/user/user-PATCH.controller.js'

const router = Router()

// GET
router.get('/users', getUsers)
router.get('/users/id/:id', getUserByID)
router.get('/users/username/:username', getUserByUsername)
router.get('/users/email/:email', getUserByEmail)
// POST
router.post('/users', addUser)
// PATCH
router.patch('/users/:id', updateUser)
// DELETE
router.delete('/users/:id', deleteUser)

export default router
