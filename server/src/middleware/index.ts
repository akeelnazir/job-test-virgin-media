import { json, urlencoded } from 'body-parser'
import * as session from 'express-session'
import * as responseTime from 'response-time'
import { Application } from 'express'

export const middleware = (app: Application) => {

  app
    .use(json())
    .use(urlencoded({ extended: true }))
    .use(session({ secret: 'a cat and a mouse', resave: true, saveUninitialized: true }))
    .use(responseTime())

}

export * from './404'
export * from './error-handler'
