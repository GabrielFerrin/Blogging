import Router from 'express'
import {
  getUsers,
  getUserByID,
  getUserByEmail,
  getUserByUsername
} from '../controllers/user/user-GET.controller.js'
import { addUser } from '../controllers/user/user-POST.controller.js'
import { deleteUser } from '../controllers/user/user-DELETE.controller.js'

const router = Router()

// GET
router.get('/', getUsers)
router.get('/id/:id', getUserByID)
router.get('/email/:email', getUserByEmail)
router.get('/username/:username', getUserByUsername)
// POST
router.post('/', addUser)
// DELETE
router.delete('/:id', deleteUser)

export default router
