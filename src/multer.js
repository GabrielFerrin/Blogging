import multer from 'multer'

// image storage
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const imageFilter = (req, file, cb) => {
  if (file.mimetype.includes('image')) {
    return cb(null, true)
  }
  return cb(new Error('Solo se admiten archivos de imagen'), false)
}

const imageLimit = { fileSize: 10000000, files: 1 }

export const imageUpload = multer({
  storage: imageStorage,
  limits: imageLimit,
  fileFilter: imageFilter
})

// pdf storage
const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/pdf')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const pdfFilter = (req, file, cb) => {
  if (file.mimetype.includes('pdf')) {
    return cb(null, true)
  }
  return cb(new Error('Solo se admiten archivos PDF'), false)
}

const pdfLimit = { fileSize: 10000000, files: 1 }

export const pdfUpload = multer({
  storage: pdfStorage,
  limits: pdfLimit,
  fileFilter: pdfFilter
})
