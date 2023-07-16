// for post route
export interface ItemData {
    item: string
    amount: number
    price: number
    completed: boolean | number
}

// for get route
export interface Item extends ItemData {
    id: number
    completed: boolean
  }


export type Action = 
    | { type: 'SET_ITEMS'; payload: Item[] }
    | { type: 'ADD_ITEM' ; payload: Item }
    | { type: 'DEL_ITEM' ; payload: number }
    | { type: 'UPD_ITEM' ; payload: { id: number; newItem: string} }
    | { type: 'TOGGLE_ITEM'; payload: {id: number; completed: boolean } }
