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
