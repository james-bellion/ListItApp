// for post route
export interface ItemData {
    item: string
    amount: number
    price: number
}

// for get route
export interface Item extends ItemData {
    id: number
}


export type Action = 
    | { type: 'SET_ITEM'; payload: Item[] }
    | { type: 'ADD_ITEM' ; payload: Item }
    | { type: 'DEL_ITEM' ; payload: number }
    | { type: 'UPD_ITEM' ; payload: {id: number; newItem: string} }
