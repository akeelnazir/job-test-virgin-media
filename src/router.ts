import * as logger from 'morgan'
import { Router, Request, Response } from 'express'
import { OK } from 'http-status-codes'
import { authenticate } from 'passport'
import { ensureLoggedIn } from 'connect-ensure-login'

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
  '/login',
  authenticate('twitter', { successRedirect: '/user', failureRedirect: '/error' })
)

router.get(
  '/logout',
  (req: Request, res: Response) => req.session.destroy((err: Error) => res.redirect('/'))
)

router.get('/user', ensureLoggedIn(), (req: Request, res: Response) => {

  res
    .status(OK)
    .json(req.user)

})

router.get(
  '/oauth/callback',
  authenticate('twitter', { failureRedirect: '/' }),
  (req: Request, res: Response) => res.redirect('/user')
)

export default router
