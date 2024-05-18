import Router from 'express'
import {
  getUsers,
  getUserByID,
  getUserByUsername,
  getUserByEmail
} from '../controllers/user/user-get.controller.js'
import { addUser } from '../controllers/user/user-post.controller.js'
import { deleteUser } from '../controllers/user/user-delete.controller.js'
import { updateUser } from '../controllers/user/user-patch.controller.js'

const router = Router()

// GET
router.get('/', getUsers)
router.get('/id/:id', getUserByID)
router.get('/username/:username', getUserByUsername)
router.get('/email/:email', getUserByEmail)
// POST
router.post('/', addUser)
// PATCH
router.patch('/:id', updateUser)
// DELETE
router.delete('/:id', deleteUser)

export default router
