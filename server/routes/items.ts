import express from 'express'

// import my db function(s)
import * as db from '../db/db'

const router = express.Router()

// route for getting my list
router.get('/', async (req, res) => {
  try {
    const listArr = await db.getAllItems()
    res.json(listArr)
  } catch (error) {
    console.error('checkout routes/items.ts', error)
    res.sendStatus(500)
  }
})

// Post route
router.post('/', async (req, res) => {
   const item = {
    ...req.body
   }

   try {
    const itemFromDb = await db.addItem(item)
    res.json(itemFromDb[0])
   } catch (error) {
    console.error('checkout routes/items.ts', error)
   }
})

//update route
router.patch('/:id', async (req, res) => {
    const id = +req.params.id
    const newItem = req.body.item

    try{
        await db.updateItem(newItem, id)
        res.sendStatus(200)
    } catch(err) {
        console.log('checkout routes/items.ts', err)
        res.sendStatus(500)
    }
})



// delete route
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        await db.deleteItem(id)
        res.sendStatus(200)

    }   catch (error) {
        console.error('error, checkout routes/items.ts', error)
        res.sendStatus(500)
    }
})

export default router
