

import * as api from '../apis/items';
import { Item, ItemData, ToggleCompletionAction } from '../../models/types';
import { ThunkAction } from '../store'
import { AppDispatch } from '../store'
import { RootState } from '../store'

// Declarations
export const SET_ITEMS = 'SET_ITEMS'
export const DEL_ITEM = 'DEL_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const UPD_ITEM = 'UPD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION'

// Simple actions
interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: Item[]
}

interface AddItemAction {
  type: typeof ADD_ITEM
  payload: Item
}

interface DelItemAction {
  type: typeof DEL_ITEM;
  payload: number;
}

interface UpdateItemAction {
  type: typeof UPD_ITEM
  payload: {
    id: number
    newItem: string
    completed: boolean
  }
}

export function setItems(items: Item[]): SetItemsAction {
  return {
    type: SET_ITEMS,
    payload: items,
  }
}

export function addItem(item: Item): AddItemAction {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

export function delItem(id: number): DelItemAction {
  return {
    type: DEL_ITEM,
    payload: id,
  }
}

export function updateListItem(id: number, newItem: string) {
    return {
      type: UPD_ITEM,
      payload: { id, newItem },
    }
  }

export function updateItem(
  id: number,
  newItem: string,
  completed: boolean
): UpdateItemAction {
  return {
    type: UPD_ITEM,
    payload: { id, newItem, completed },
  }
}

// trying//////////////////////
interface UpdateItemCompletionAction {
  type: typeof TOGGLE_COMPLETION;
  payload: { id: number; completed: boolean };
}

export function updateItemCompletionAction(
  id: number,
  completed: boolean
): UpdateItemCompletionAction {
  return {
    type: TOGGLE_COMPLETION,
    payload: { id, completed },
  };
}





// Thunks here 


// Thunk to toggle completion

// export function toggleItem(id: number, completed: boolean) {
//   return async (dispatch: AppDispatch, getState: () => RootState) => {
//     try {
//       await api.patchItemCompleted(id, completed); // Update the completed value in the database
//       dispatch({
//         type: TOGGLE_ITEM,
//         payload: { id, completed },
//       });

//       // Update the completed status in the Redux store
//       const updatedItemsArr = getState().items.map((item) =>
//         item.id === id ? { ...item, completed } : item
//       );
//       dispatch(setItems(updatedItemsArr));
//     } catch (err) {
//       console.error('error in toggleItem thunkkkkkkk', err);
//     }
//   };
// }


// Fix the function name to match the updated API function name
export function toggleItem(id: number, completed: boolean) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      await api.patchItemCompleted(id, completed); // Update the completed value in the database
      dispatch({
        type: TOGGLE_ITEM,
        payload: { id, completed },
      });

      // Update the completed status in the Redux store
      const updatedItemsArr = getState().items.map((item) =>
        item.id === id ? { ...item, completed } : item
      );
      dispatch(setItems(updatedItemsArr)); // If you have a separate action to update the items array in Redux, use it here
    } catch (err) {
      console.error('error in toggleItem thunk', err);
    }
  };
}




export function getItemsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const itemsArr = await api.fetchItems();
      dispatch(setItems(itemsArr));
    } catch (err) {
      console.error('bad get thunk', err);
    }
  };
}

export function addItemThunk(item: ItemData): ThunkAction {
  return async (dispatch) => {
    try {
      const newItem = await api.postItem(item);
      dispatch(addItem(newItem));
    } catch (err) {
      console.error('bad thunk error for add item', err);
      console.log('thunk working')
    }
  };
}

export function deleteItemThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.removeItem(id);
      dispatch(delItem(id));
    } catch (err) {
      console.error('error in del item thunk', err);
    }
  };
}

// testing this thunk for changing everything
// export function updateItemThunk(
//   id: number,
//   newItem: string,
//   completed: boolean
// ): ThunkAction {
//   return async (dispatch) => {
//     try {
//       await api.patchItem(id, newItem, completed);
//       dispatch(updateItem(id, newItem, completed));

//       await api.patchItemCompleted(id, completed);
//       dispatch(updateItem(id, newItem, completed));
//     } catch (err) {
//       console.error('error in update thunk', err);
//     }
//   };
// }

// trying soething updating the boolean only 
export function updateItemThunk(
  id: number,
  completed: boolean
): ThunkAction {
  return async (dispatch) => {
    try {
      await api.patchItemCompleted(id, completed);
      dispatch(updateItemCompletionAction(id, completed));
    } catch (err) {
      console.error('error in update thunk', err);
    }
  };
}

// thunk for changing list item
export function updateListItemThunk(id: number, item: string): ThunkAction {
    return async (dispatch) => {
      try {
      //   console.log(id, rating)
        await api.patchListItem(id, item)
        dispatch(updateListItem(id, item))
      } catch (err) {
        console.error('oh ohhh update list item thunk error', err)
      }
    }
  }



  
function updateItemAction(updatedItemsArr: Item[]): any {
  throw new Error('Function not implemented.');
}

// function updateItemCompletionAction(id: number, completed: boolean): any {
//   throw new Error('Function not implemented.');
// }

