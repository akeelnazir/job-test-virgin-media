import { createServer, Server } from 'http'
import { join } from 'path'
import { config } from 'dotenv-safe'

import app from './app'

const server: Server = createServer(app)

if (require.main === module) {
  config({
    example: join(__dirname, '.env.example'),
    path: join(__dirname, '.env')
  })
  const PORT = parseInt(process.env.PORT, 10) || 3000

  app.set('port', PORT)

  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
  })
}
