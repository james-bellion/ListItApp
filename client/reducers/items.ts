

import { Item, Action } from "../../models/types";
import { SET_ITEMS, DEL_ITEM, ADD_ITEM, UPD_ITEM, TOGGLE_ITEM } from '../actions/items'

const initialState = [] as Item[]

export default function itemsReducer(state = initialState, action: Action) {
    const { type, payload } = action
    switch (type) {

        case SET_ITEMS:
            return payload

        case ADD_ITEM:
            return [payload, ...state]

        case DEL_ITEM:
            return state.filter((item) => item.id !== payload)

         case UPD_ITEM:
        return state.map((item) => {
            if(item.id === payload.id) {
                return {...item, item: payload.newItem}
            }
            return item
        } 
        ) 

        case TOGGLE_ITEM:
            return state.map((item) => {
              if (item.id === payload.id) {
                return { ...item, completed: payload.completed } // check spelling
              }
              return item
            })


    

        default:
        return state
    }
} 