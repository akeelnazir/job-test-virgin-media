import { Application } from 'express'
import { deserializeUser, initialize, serializeUser, session } from 'passport'
import { twitterStrategy } from './twitter-strategy'

export const passportConfig = (app: Application) => {

  app
    .use(initialize())
    .use(session())

  serializeUser((user, cb: Function) => {
    cb(null, user)
  })

  deserializeUser((user, cb: Function) => {
    cb(null, user)
  })

  twitterStrategy()

}



