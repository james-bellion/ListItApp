import request from 'superagent'
import { ItemData } from '../../models/types' 

const itemsUrl = '/api/v1/items'

// get the items for the shopping list
export async function fetchItems() {
    const res = await request.get(itemsUrl)
    return res.body
}
// delete
export async function removeItem(id: number) {
    await request.delete(`${itemsUrl}/${id}`)
}

// adding a new item
export async function postItem(item: ItemData) {
    const res = await request.post(itemsUrl).send(item)
    return res.body
}

// updating 
export async function patchItem(id: number, newItem: string) {
    await request.patch(`${itemsUrl}/${id}`).send({ item: newItem })
}