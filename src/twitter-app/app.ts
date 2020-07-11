import { Application } from 'express'
import * as express from 'express'
import { initialize, session, serializeUser, deserializeUser, use } from 'passport'
import { Strategy, Profile } from 'passport-twitter'
import { config } from 'dotenv-safe'

import router from './router'
import { middleware } from '../middleware'
import { join } from "path"

config({
  example: join(__dirname, '../', '.env.example'),
  path: join(__dirname, '../', '.env')
})

use(new Strategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: '/oauth/callback'
}, (token: string, tokenSecret: string, profile: Profile, cb: Function) => {
  return cb(null, profile);
}))

const app: Application = express()
middleware(app)

initialize()
session()
serializeUser((user, cb: Function) => {
  cb(null, user)
})
deserializeUser((user, cb: Function) => {
  cb(null, user)
})

app.use(router)

export default app
