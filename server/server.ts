import express from 'express'
import path from 'path'
import { join } from 'node:path'

import items from './routes/items'
//import home from '.routes/items'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))


server.use('/api/v1/items', items)


// server.use(express.static(path.join(__dirname, 'public')))

export default server
