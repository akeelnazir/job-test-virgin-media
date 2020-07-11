import * as express from 'express'
import { Application } from 'express'

import router from './router'
import { notFound, errorHandler, middleware } from './middleware'

import twitterApp from './twitter-app/app'

const app: Application = express()

// Apply middleware
middleware(app)

// Routing
app.use(router)

// Twitter sub-app
app.use('/api', twitterApp)

// Request Error handling Middleware
app
  .use(notFound)
  .use(errorHandler)

export default app
