export const removeHeader = (headerName) => {
  return (req, res, next) => {
    res.removeHeader(headerName)
    next()
  }
}

export default removeHeader
