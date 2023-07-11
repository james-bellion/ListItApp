// # This is where my database functions will go

// to do import item, itemData from models


import conection from './connection'

const db = conection

export function getAllItems(): Promise<Item[]> {
    return db('items')
     .select('id', 'item', 'amount', 'price')
}

export function addItems(item: ItemData): Promise<Item[]> {
    return db('items')
     .insert(item)
     .returning(['id', 'item', 'amount', 'price'])
}

export function deleteItem(id: number): Promise<number> {
    return db('items')
     .delete()
     .where({id})
}