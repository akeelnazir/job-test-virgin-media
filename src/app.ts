import * as express from 'express'
import { Application } from 'express'

import router from './router'
import { notFound, errorHandler, middleware } from './middleware'
import { passportConfig } from './passport/passport-config'


const app: Application = express()

// Apply middleware
middleware(app)
passportConfig(app)

// Routing
app.use(router)

// Request Error handling Middleware
app
  .use(notFound)
  .use(errorHandler)

export default app
