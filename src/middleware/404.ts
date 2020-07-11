import { Request, Response, NextFunction } from 'express'
import { NOT_FOUND } from 'http-status-codes'

export const notFound =  (req: Request, res: Response, next: NextFunction) => {
  res.status(NOT_FOUND).send(`page/data not found ${req.url}`)
  next()
}
