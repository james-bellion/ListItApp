import * as api from '../apis/items'
import { Item, ItemData } from '../../models/types'
import { ThunkAction } from '../store'

// declairations 

export const SET_ITEMS = 'SET_ITEMS'
export const DEL_ITEM = 'DEL_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const UPD_ITEM = 'UPD_ITEM'

// Simple actions 

export function setItems(items: Item[]) {
    return {
        type: SET_ITEMS,
        payload: items
    }
}

export function addItem(item: Item) {
    return {
        type: ADD_ITEM,
        playload: item
    }
}


export function delItem(id: number) {
    return {
        type: DEL_ITEM,
        payload: id
    }
}

export function updateItem(id: number, newItem: string) {
    return {
        type: UPD_ITEM,
        payload: { id, newItem}
    }
}


//  THUNKS 

// get items 
export function getItemsThunk(): ThunkAction {
    return async (dispatch) => {
        try {

            const itemsArr = await api.fetchItems()

            dispatch(setItems(itemsArr))

        } catch (err) {
            console.error('bad thunk', err)
        }
    }
}


// add item
export function addItemThunk(item: ItemData): ThunkAction {
    return async (dispatch) => {
        try {
            const newItem = await api.postItem(item)
            dispatch(addItem(newItem))
        } catch (err) {
            console.error('bad thunk error for add item', err)
        }
    }
}

// del item
export function deleteItemThunk(id: number): ThunkAction {
    return async (dispatch) => {
        try {
            await api.removeItem(id)
            dispatch(delItem(id))
        } catch (err) {
            console.error('error in del item thunk', err)
        }
    }
}

// update item
export function updateItemThunk(id: number, item: string): ThunkAction {
    return async (dispatch) => {
        try {
            await api.patchItem(id, item)
            dispatch(updateItem(id, item))
        } catch (err) {
            console.error('error in update movie thunk', err)
        }
    }
}