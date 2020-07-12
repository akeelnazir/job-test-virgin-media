import { join } from 'path'
import { config } from 'dotenv-safe'
import { OAuth } from 'oauth'

export class TwitterAPI {

  oauth: OAuth

  constructor () {
    config({
      example: join(__dirname, '../', '.env.example'),
      path: join(__dirname, '../', '.env')
    })

    this.oauth = new OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.TWITTER_CONSUMER_KEY,
      process.env.TWITTER_CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    )
  }

  getUserTimeline (userKey: string, userSecret: string, userId: string, cb: Function) {
    this.oauth.get('https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=' + userId,
      userKey,
      userSecret,
      (error, results, res) => {
        results = JSON.parse(results.toString())
        cb(results)
      }
    )
  }

}
