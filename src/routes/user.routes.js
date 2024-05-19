import Router from 'express'
import { getUsers } from '../controllers/user/user.controller.js'

const router = Router()

// GET
router.get('/', getUsers)

export default router
