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
// export async function patchItem(id: number, newItem: string) {
//   await request.patch(`${itemsUrl}/${id}`).send({ item: newItem })
// }

export async function patchListItem(id: number, newItem: string) {
       //console.log(typeof id, typeof newItem)
    await request.patch(`${itemsUrl}/${id}`).send({ rating: newItem })
    // * e.g. api/v1/items/4
  }

export async function patchItem(id: number, newItem: string, completed: boolean) {
    await request.patch(`${itemsUrl}/${id}`).send({ item: newItem, completed });
  }
  
  export async function patchItemCompleted(id: number, completed: boolean) {
    await request.patch(`${itemsUrl}/${id}/completed`).send({ completed })
  }
