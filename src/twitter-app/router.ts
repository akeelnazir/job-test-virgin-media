import { Router } from 'express'
import { getHandler } from './handlers'

const router: Router = Router()

router
  .get('/', getHandler())

export default router
