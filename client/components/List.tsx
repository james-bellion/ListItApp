// import { useAppDispatch, useAppSelector } from '../hooks/hooks';
// import { toggleItem, getItemsThunk, updateItemThunk } from '../actions/items';
// import { RootState } from '../store';
// import { Item, ItemData } from '../../models/types';
// import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import * as action from '../actions/items';
// import { useNavigate } from 'react-router-dom'
// import AddItem from './AddItem';

// function List() {
//   const [formData, setFormData] = useState<string>('');
//   const [showForm, setShowForm] = useState(false);
//   const dispatch = useAppDispatch();
//   const itemsArr = useAppSelector((state: RootState) => state.items) as Item[];

//   const navigate = useNavigate()

//   // Handle checkbox change with a default value for 'completed' to avoid uncontrolled input warning
//   const handleCheckboxChange = (id: number, completed: boolean | undefined) => {
//     // Toggle the completed status by using !completed if it's defined, otherwise default to false
//     dispatch(toggleItem(id, completed !== undefined ? !completed : false));
//   };

//   const handleDelete = (id: number) => {
//     dispatch(action.deleteItemThunk(id));
//   };

//   const handleSubmit = (evt: FormEvent, id: number, formData: string) => {
//     evt.preventDefault();
//     console.log('submit:', formData);
//     dispatch(action.updateListItemThunk(id, formData));
//   };

//   const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     const { value } = evt.target;
//     setFormData(value);
//   };

//   useEffect(() => {
//     dispatch(getItemsThunk());
//   }, [dispatch]);

//   return (
//     <div className='list-container'>
//       <div className='notebook'>

//       <h1 className='title'>My List</h1>
//       <AddItem />
//       <ul>
//         {itemsArr.map((item) => (
//           <li key={item.id}>
//             <label>
//               <input
//                 className='input-container'
//                 type="checkbox"
//                 checked={item.completed !== undefined ? item.completed : false} // Add default value for 'completed'
//                 onChange={() => handleCheckboxChange(item.id, item.completed)}
//               />
//               <span
//                 style={{
//                   textDecoration: item.completed ? 'line-through' : 'none',
//                 }}
//               >
//                 {item.item}
//               </span>
//             </label>
//             <button onClick={() => handleDelete(item.id)}>Delete</button>

//             <button className="update-btn" onClick={() => setShowForm(!showForm)}>
//               Edit
//             </button>
//             {showForm && (
//               <form onSubmit={(evt) => handleSubmit(evt, item.id, formData)}>
//                 <label htmlFor="rating">Edit</label>
//                 <input
//                   type="text"
//                   id="new-item"
//                   name="new-item"
//                   value={formData}
//                   onChange={handleChange}
//                 />
//                 <input type="submit" value="Update" />
//               </form>
//             )}
//           </li>
//         ))}
//       </ul>

//       <button onClick={() => navigate('/')}>home</button>
//       </div>
      
//     </div>
//   );
// }

// export default List;



// nearly there!!!!!!!
// import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../hooks/hooks';
// import { RootState } from '../store';
// import { Item } from '../../models/types';
// import { toggleItem, getItemsThunk, updateListItemThunk, deleteItemThunk } from '../actions/items';
// import { useNavigate } from 'react-router-dom';
// import AddItem from './AddItem';

// function List() {
//   const [formData, setFormData] = useState<string>('');
//   const [editingItemId, setEditingItemId] = useState<number | null>(null);
//   const dispatch = useAppDispatch();
//   const itemsArr = useAppSelector((state: RootState) => state.items) as Item[];

//   const navigate = useNavigate();

//   const handleCheckboxChange = (id: number, completed: boolean | undefined) => {
//     dispatch(toggleItem(id, completed !== undefined ? !completed : false));
//   };

//   const handleDelete = (id: number) => {
//     dispatch(deleteItemThunk(id));
//   };

//   const handleItemClick = (id: number) => {
//     setEditingItemId(id);
//   };

//   const handleSubmit = (evt: FormEvent, id: number, formData: string) => {
//     evt.preventDefault();
//     console.log('submit:', formData);
//     dispatch(updateListItemThunk(id, formData));
//     setEditingItemId(null);
//   };

//   const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     const { value } = evt.target;
//     setFormData(value);
//   };

//   useEffect(() => {
//     dispatch(getItemsThunk());
//   }, [dispatch]);

//   return (
//     <div className="list-container">
//       <div className="notebook">
//         <h1 className="title">My List</h1>
//         <AddItem />
//         <ul>
//           {itemsArr.map((item) => (
//             <li key={item.id} onClick={() => handleItemClick(item.id)}>
//               {editingItemId === item.id ? (
//                 <form onSubmit={(evt) => handleSubmit(evt, item.id, formData)}>
//                   <input
//                     type="text"
//                     id="new-item"
//                     name="new-item"
//                     value={formData}
//                     onChange={handleChange}
//                     onKeyPress={(evt) => {
//                       if (evt.key === 'Enter') {
//                         handleSubmit(evt, item.id, formData);
//                       }
//                     }}
//                   />
//                   <input type="submit" value="Update" />
//                 </form>
//               ) : (
//                 <label>
//                   <input
//                     className="input-container"
//                     type="checkbox"
//                     checked={item.completed !== undefined ? item.completed : false}
//                     onChange={() => handleCheckboxChange(item.id, item.completed)}
//                   />
//                   <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//                     {item.item}
//                   </span>
//                 </label>
//               )}
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//         <button onClick={() => navigate('/')}>home</button>
//       </div>
//     </div>
//   );
// }

// export default List;


// working good just need to change the layout 
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { RootState } from '../store';
import { Item } from '../../models/types';
import { toggleItem, getItemsThunk, updateListItemThunk, deleteItemThunk } from '../actions/items';
import { useNavigate } from 'react-router-dom';
import AddItem from './AddItem';

function List() {
  const [formData, setFormData] = useState<string>('');
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const itemsArr = useAppSelector((state: RootState) => state.items) as Item[];

  const navigate = useNavigate();

  const handleCheckboxChange = (id: number, completed: boolean | undefined) => {
    dispatch(toggleItem(id, completed !== undefined ? !completed : false));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItemThunk(id));
  };

  const handleItemClick = (id: number) => {
    setEditingItemId(id);
  };

  const handleSubmit = (id: number, formData: string) => {
    console.log('submit:', formData);
    dispatch(updateListItemThunk(id, formData));
    setEditingItemId(null);
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFormData(value);
  };

  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  return (
    <div className="list-container">
      <div className="notebook">
        <h1 className="title">My List</h1>
        <AddItem />
        <ul style={{ listStyleType: 'none' }}>
          {itemsArr.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item.id)}>
              {editingItemId === item.id ? (
                <form
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmit(item.id, formData);
                  }}
                >
                  <input
                    type="text"
                    id="new-item"
                    name="new-item"
                    value={formData}
                    onChange={handleChange}
                    onKeyPress={(evt) => {
                      if (evt.key === 'Enter') {
                        handleSubmit(item.id, formData);
                      }
                    }}
                  />
                </form>
              ) : (
                <label>
                  <input
                    className="input-container"
                    type="checkbox"
                    checked={item.completed !== undefined ? item.completed : false}
                    onChange={() => handleCheckboxChange(item.id, item.completed)}
                  />
                  <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                    {item.item}
                  </span>
                </label>
              )}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/')}>home</button>
      </div>
    </div>
  );
}

export default List;








