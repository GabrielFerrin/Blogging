import Router from 'express'
import {
  getUsers,
  getUserByID,
  getUserByEmail,
  getUserByUsername
} from '../controllers/user/user-GET.controller.js'
import { addUser } from '../controllers/user/user-POST.controller.js'
import { deleteUser } from '../controllers/user/user-DELETE.controller.js'
import { updateUser } from '../controllers/user/user-PATCH.controller.js'

const router = Router()

// GET | /users
router.get('/', getUsers)
router.get('/id/:id', getUserByID)
router.get('/email/:email', getUserByEmail)
router.get('/username/:username', getUserByUsername)
// POST
router.post('/', addUser)
// PATCH
router.patch('/:id', updateUser)
// DELETE
router.delete('/:id', deleteUser)

export default router
