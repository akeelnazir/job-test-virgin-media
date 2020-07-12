import * as logger from 'morgan'
import { Router, Request, Response } from 'express'
import { OK } from 'http-status-codes'
import { authenticate } from 'passport'
import { ensureLoggedIn } from 'connect-ensure-login'

const router: Router = Router()

// Basic logging for router events
router.use(logger('dev'))

// Routes
router.get('/api', (req: Request, res: Response) => {
  res
    .status(OK)
    .send('OK')
})

router.get(
  '/api/login',
  authenticate('twitter', { successRedirect: '/api/user', failureRedirect: '/api/error' })
)

router.get(
  '/api/logout',
  (req: Request, res: Response) => req.session.destroy((err: Error) => res.redirect('/'))
)

router.get('/api/user', ensureLoggedIn(), (req: Request, res: Response) => {

  res
    .status(OK)
    .json(req.user)

})

router.get(
  '/api/oauth/callback',
  authenticate('twitter', { failureRedirect: '/api/error' }),
  (req: Request, res: Response) => res.redirect('/api/user')
)

export default router
