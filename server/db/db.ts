// # This is where my database functions live

import { Item, ItemData } from '../../models/types'


import conection from './connection'

const db = conection

// function for used in my get route to display my seed data
export function getAllItems(): Promise<Item[]> {
    return db('litems')
     .select('id', 'item', 'amount', 'price', 'compleated')
}

// fucntion used in my post route to add new items 
export function addItem(item: ItemData): Promise<Item[]> {
    return db('litems')
     .insert(item)
     .returning(['id', 'item', 'amount', 'price'])
}

// function used in my delete route
export function deleteItem(id: number): Promise<number> {
    return db('litems')
     .delete()
     .where({ id })
}

// function used in my patch route to update item data
 export function updateItem(newItem: ItemData, id: number) {
     return db('litems')
      .update({ item: newItem })
      .where({ id })
 }


// update the boolean value for items on my list to check them off
 export async function updateCompletedValue(id: number, completed: boolean) {
    try {
      await db('litems').where({ id }).update({ compleated: completed });
      return true; // Success
    } catch (error) {
      console.error('Error updating completed value:', error);
      throw error;
    }
  }
