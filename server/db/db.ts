// # This is where my database functions live

import { Item, ItemData } from '../../models/types'


import conection from './connection'

const db = conection

export function getAllItems(): Promise<Item[]> {
    return db('items')
     .select('id', 'item', 'amount', 'price')
}

export function addItem(item: ItemData): Promise<Item[]> {
    return db('items')
     .insert(item)
     .returning(['id', 'item', 'amount', 'price'])
}

export function deleteItem(id: number): Promise<number> {
    return db('items')
     .delete()
     .where({ id })
}

export function updateItem(newItem: ItemData, id: number) {
    return db('items')
     .update({ item: newItem })
     .where({ id })
}