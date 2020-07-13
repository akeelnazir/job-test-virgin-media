import * as logger from 'morgan'
import { Router, Request, Response } from 'express'
import { OK } from 'http-status-codes'
import { authenticate } from 'passport'
import { join } from 'path'
import { config } from 'dotenv-safe'
import { ensureLoggedIn } from 'connect-ensure-login'

import { User } from './passport'
import { TwitterAPI } from './twitter/twitter-config'

config({
  example: join(__dirname, '.env.example'),
  path: join(__dirname, '.env')
})

const uiLoginUrl = process.env.UI_LOGIN_URL
const loginUrl = process.env.LOGIN_URL
const logoutUrl = process.env.LOGOUT_URL
const loginCallbackUrl = process.env.LOGIN_CALLBACK_URL
const loginRedirectUrl = process.env.LOGIN_REDIRECT_URL
const loginErrorUrl = process.env.LOGIN_ERROR_URL

const twitterApi = new TwitterAPI()
const router: Router = Router()

// Basic logging for router events
router.use(logger('dev'))

// Routes
router.get(
  '/api/health',
  (req: Request, res: Response) => res.status(OK).send('OK'))

router.get(
  loginUrl,
  authenticate('twitter', { successRedirect: loginRedirectUrl, failureRedirect: loginErrorUrl })
)

router.get(
  logoutUrl,
  (req: Request, res: Response) => req.session.destroy(() => res.redirect(uiLoginUrl))
)

router.get(
  loginRedirectUrl,
  ensureLoggedIn({ redirectTo: loginUrl }),
  (req: Request, res: Response) => {
    const safeUserObject: User = {
      id: req.user['id'],
      name: req.user['name'],
      displayName: req.user['displayName'],
      provider: req.user['provider']
    }

    res.status(OK).json(safeUserObject)
  })

router.get(
  '/api/tweets',
  ensureLoggedIn({ redirectTo: loginUrl }),
  (req: Request, res: Response) => {

    const { user } = req

    twitterApi
      .getUserTimeline(
        user['token'],
        user['tokenSecret'],
        req.user['id'],
        (results: any[]) => {
          res
            .status(OK)
            .json(results)
        }
      )
  })

router.get(
  loginCallbackUrl,
  authenticate('twitter', { failureRedirect: loginErrorUrl }),
  (req: Request, res: Response) => res.redirect(loginRedirectUrl)
)

export default router
