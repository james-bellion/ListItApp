// import * as api from '../apis/items'
// import { Item, ItemData } from '../../models/types'
// import { ThunkAction } from '../store'
// import { AppDispatch } from '../store'; // Import the AppDispatch type
// import { RootState } from '../store';


// // declairations

// export const SET_ITEMS = 'SET_ITEMS'
// export const DEL_ITEM = 'DEL_ITEM'
// export const ADD_ITEM = 'ADD_ITEM'
// export const UPD_ITEM = 'UPD_ITEM'
// export const TOGGLE_ITEM = 'TOGGLE_ITEM'


// // Simple actions

// export function setItems(items: Item[]) {
//   return {
//     type: SET_ITEMS,
//     payload: items,
//   }
// }

// export function addItem(item: Item) {
//   return {
//     type: ADD_ITEM,
//     payload: item,
//   }
// }

// export function delItem(id: number) {
//   return {
//     type: DEL_ITEM,
//     payload: id,
//   }
// }

// // export function updateItem(id: number, newItem: string,) {
// //   return {
// //     type: UPD_ITEM,
// //     payload: { id, newItem },
// //   }
// // }


// export function updateItem(id: number, newItem: string, completed: boolean) {
//     return {
//       type: UPD_ITEM,
//       payload: { id, newItem, completed },
//     };
//   }


// //   export function toggleItem(id: number, completed: boolean) {
// //     return {
// //       type: 'TOGGLE_ITEM',
// //       payload: { id, completed },
// //     };
// //   }

// // export function toggleItem(id: number, completed: boolean) {
// //     return async (dispatch: AppDispatch) => {
// //       try {
// //         await api.patchItemCompleted(id, completed); // Update the completed value in the database
// //         dispatch({
// //           type: TOGGLE_ITEM,
// //           payload: { id, completed },
// //         });
// //       } catch (err) {
// //         console.error('error in toggleItem thunk', err);
// //       }
// //     };
// //   }

// // export function toggleItem(id: number, completed: boolean) {
// //     return async (dispatch: AppDispatch) => {
// //       try {
// //         await api.patchItemCompleted(id, completed); // Update the completed value in the database
// //         dispatch({
// //           type: TOGGLE_ITEM,
// //           payload: { id, completed },
// //         });
// //       } catch (err) {
// //         console.error('error in toggleItem thunk', err);
// //       }
// //     };
// //   }

// export function toggleItem(id: number, completed: boolean) {
//     return async (dispatch: AppDispatch, getState: () => RootState) => {
//       try {
//         await api.patchItemCompleted(id, completed); // Update the completed value in the database
//         dispatch({
//           type: TOGGLE_ITEM,
//           payload: { id, completed },
//         });
  
//         // Update the completed status in the Redux store
//         const updatedItemsArr = getState().items.map((item) =>
//           item.id === id ? { ...item, completed } : item
//         );
//         dispatch(setItems(updatedItemsArr));
//       } catch (err) {
//         console.error('error in toggleItem thunk', err);
//       }
//     };
//   }

// //  THUNKS

// // get items
// export function getItemsThunk(): ThunkAction {
//   return async (dispatch) => {
//     try {
//       const itemsArr = await api.fetchItems()

//       dispatch(setItems(itemsArr))
//     } catch (err) {
//       console.error('bad thunk', err)
//     }
//   }
// }



// // add item
// export function addItemThunk(item: ItemData): ThunkAction {
//   return async (dispatch) => {
//     try {
//       const newItem = await api.postItem(item)
//       dispatch(addItem(newItem))
//     } catch (err) {
//       console.error('bad thunk error for add item', err)
//     }
//   }
// }

// // del item
// export function deleteItemThunk(id: number): ThunkAction {
//   return async (dispatch) => {
//     try {
//       await api.removeItem(id)
//       dispatch(delItem(id))
//     } catch (err) {
//       console.error('error in del item thunk', err)
//     }
//   }
// }

// // export function updateItemThunk(id: number, newItem: string, completed: boolean): ThunkAction {
// //     return async (dispatch) => {
// //       try {
// //         await api.patchItem(id, newItem, completed);
// //         dispatch(updateItem(id, newItem, completed));
  
// //         await api.patchItemCompleted(id, completed);
// //         dispatch(toggleItem(id, completed));
// //       } catch (err) {
// //         console.error('error in update thunk', err);
// //       }
// //     };
// //   }

// export function updateItemThunk(id: number, newItem: string, completed: boolean): ThunkAction {
//     return async (dispatch) => {
//       try {
//         await api.patchItem(id, newItem, completed);
//         dispatch(updateItem(id, newItem, completed));
  
//         await api.patchItemCompleted(id, completed);
//         dispatch(toggleItem(id, completed));
//       } catch (err) {
//         console.error('error in update thunk', err);
//       }
//     };
//   }

import * as api from '../apis/items';
import { Item, ItemData } from '../../models/types';
import { ThunkAction } from '../store';
import { AppDispatch } from '../store'; // Import the AppDispatch type
import { RootState } from '../store';

// Declarations
export const SET_ITEMS = 'SET_ITEMS';
export const DEL_ITEM = 'DEL_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const UPD_ITEM = 'UPD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

// Simple actions
interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: Item[];
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface DelItemAction {
  type: typeof DEL_ITEM;
  payload: number;
}

interface UpdateItemAction {
  type: typeof UPD_ITEM;
  payload: {
    id: number;
    newItem: string;
    completed: boolean;
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
      dispatch(setItems(updatedItemsArr));
    } catch (err) {
      console.error('error in toggleItem thunk', err);
    }
  };
}

// Thunks
export function getItemsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const itemsArr = await api.fetchItems();
      dispatch(setItems(itemsArr));
    } catch (err) {
      console.error('bad thunk', err);
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

export function updateItemThunk(
  id: number,
  newItem: string,
  completed: boolean
): ThunkAction {
  return async (dispatch) => {
    try {
      await api.patchItem(id, newItem, completed);
      dispatch(updateItem(id, newItem, completed));

      await api.patchItemCompleted(id, completed);
      dispatch(toggleItem(id, completed));
    } catch (err) {
      console.error('error in update thunk', err);
    }
  };
}

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



  
