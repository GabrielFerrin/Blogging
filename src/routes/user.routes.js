import Router from 'express'
import { imageUpload, pdfUpload } from '../multer.js'
import {
  getUsers,
  getUserByID,
  getUserByEmail,
  getUserByUsername
} from '../controllers/user/user-GET.controller.js'
import { fileError, removeExpressHeader } from '../helpers.js'
import {
  addUser,
  getProfilePicture,
  getPdfFile
} from '../controllers/user/user-POST.controller.js'
import { deleteUser } from '../controllers/user/user-DELETE.controller.js'
import { updateUser } from '../controllers/user/user-PATCH.controller.js'

const router = Router()
router.use(removeExpressHeader('X-Powered-By')) // TODO:not working
router.disable('X-Powered-By') // TODO:not working

// GET | /users
router.get('/', getUsers)
router.get('/id/:id', getUserByID)
router.get('/email/:email', getUserByEmail)
router.get('/username/:username', getUserByUsername)
// POST
router.post('/', addUser)
router.post('/profile-picture', imageUpload.single('file'),
  getProfilePicture, fileError)
router.post('/upload-pdf', pdfUpload.single('file'),
  getPdfFile, fileError)
// PATCH
router.patch('/:id', updateUser)
// DELETE
router.delete('/:id', deleteUser)

export default router
