import express from 'express'
import path from 'path'

import items from './routes/items'

const server = express()

server.use(express.json())


server.use('/api/v1/items', items)


server.use(express.static(path.join(__dirname, 'public')))

export default server
