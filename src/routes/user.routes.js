import Router from 'express'
import { getUsers, addUser } from '../controllers/user.controller.js'

const router = Router()

router.get('/users', getUsers)
router.post('/add-user', addUser)

export default router
