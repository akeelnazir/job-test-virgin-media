import { Request, Response } from 'express'
import { OK } from 'http-status-codes'
import { Db } from '../models'

export const getHandler = () => (req: Request, res: Response) => {

  res
    .status(OK)
    .json({})

}
