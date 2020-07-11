import * as logger from 'morgan'
import { Router, Request, Response } from 'express'
import { OK } from 'http-status-codes'
import { authenticate } from 'passport'

const router: Router = Router()

// Basic logging for router events
router.use(logger('dev'))

// Routes
router.get('/', (req: Request, res: Response) => {
  res
    .status(OK)
    .send('OK')
})

router.get(
  '/oauth/callback',
  authenticate('twitter', { failureRedirect: '/api/login' }),
  (req: Request, res: Response) => res.redirect('/')
)

export default router
