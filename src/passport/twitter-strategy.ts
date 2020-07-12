import { Request } from 'express'
import { config } from 'dotenv-safe'
import { join } from 'path'
import { use } from 'passport'
import { Profile, Strategy } from 'passport-twitter'
import { User } from './user.model'

export const twitterStrategy = () => {

  config({
    example: join(__dirname, '../', '.env.example'),
    path: join(__dirname, '../', '.env')
  })

  use(new Strategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: '/oauth/callback',
    passReqToCallback: true
  }, (req: Request, token: string, tokenSecret: string, profile: Profile, cb: Function) => {

    const user: User = {
      id: profile.id,
      name: profile.username,
      displayName: profile.displayName,
      provider: profile.provider
    }
    return cb(null, user);
  }))
}
