export const removeExpressHeader = (headerName) => {
  return (req, res, next) => {
    res.removeHeader(headerName)
    next()
  }
}

export const fileError = (err, req, res, next) => {
  if (err) {
    return res.status(400).json({ message: err.message })
  }
}

export const validateOrigin = (req, res, next) => {
  const allowedOrigins = ['localhost:3000', 'blogging-ih1l.onrender.com']
  const origin = req.headers.origin || req.headers.host
  console.log('Origin:', origin)
  if (!allowedOrigins.includes(origin)) {
    return res.status(400).json({ message: 'Origin not allowed' })
  }
  next()
}
