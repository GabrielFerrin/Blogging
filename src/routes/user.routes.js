import Router from 'express'
import {
  getUsers,
  getUserByID,
  getUserByEmail,
  getUserByUsername
} from '../controllers/user/user-GET.controller.js'

const router = Router()

// GET
router.get('/', getUsers)
router.get('/id/:id', getUserByID)
router.get('/email/:email', getUserByEmail)
router.get('/username/:username', getUserByUsername)

export default router
