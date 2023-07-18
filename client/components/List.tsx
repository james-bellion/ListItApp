// // here goes
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
//   const [isEditing, setIsEditing] = useState(false);
//   const [clickStartTime, setClickStartTime] = useState(0);
//   const dispatch = useAppDispatch();
//   const itemsArr = useAppSelector((state: RootState) => state.items) as Item[];

//   const navigate = useNavigate();

//   const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>, id: number, completed: boolean | undefined) => {
//     // Prevent the event from bubbling up and triggering the li click event
//     evt.stopPropagation();
//     dispatch(toggleItem(id, completed !== undefined ? !completed : false));
//   };

//   const handleDelete = (id: number) => {
//     dispatch(deleteItemThunk(id));
//   };

//   const handleItemMouseDown = (id: number) => {
//     setClickStartTime(Date.now());
//   };

//   const handleItemMouseUp = (id: number) => {
//     const clickDuration = Date.now() - clickStartTime;
//     // If the click duration is greater than 2 seconds, open the edit form
//     if (clickDuration >= 1000) {
//       setEditingItemId(id);
//       setIsEditing(true);
//     }
//   };

//   const handleSubmit = (id: number, formData: string) => {
//     console.log('submit:', formData);
//     dispatch(updateListItemThunk(id, formData));
//     setEditingItemId(null);
//     setIsEditing(false); // Close the edit form after submission
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
//         <ul style={{ listStyleType: 'none' }}>
//           {itemsArr.map((item) => (
//             <li
//               key={item.id}
//               onMouseDown={() => handleItemMouseDown(item.id)}
//               onMouseUp={() => handleItemMouseUp(item.id)}
//               className="list-item"
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="checkbox-container">
//                 <input
//                   type="checkbox"
//                   checked={item.completed !== undefined ? item.completed : false}
//                   onChange={(evt) => handleCheckboxChange(evt, item.id, item.completed)}
//                   style={{ cursor: 'pointer' }}
//                 />
//               </div>
//               <div className="item-content">
//                 {editingItemId === item.id && isEditing ? (
//                   <form
//                     onSubmit={(evt) => {
//                       evt.preventDefault();
//                       handleSubmit(item.id, formData);
//                     }}
//                   >
//                     <input
//                       type="text"
//                       id="new-item"
//                       name="new-item"
//                       value={formData}
//                       onChange={handleChange}
//                       style={{ cursor: 'pointer' }}
//                       onKeyPress={(evt) => {
//                         if (evt.key === 'Enter') {
//                           handleSubmit(item.id, formData);
//                         }
//                       }}
//                     />
//                   </form>
//                 ) : (
//                   <label>
//                     <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//                       {item.item}
//                     </span>
//                   </label>
//                 )}
//                 <img id="del-btn" alt='delete button icon' src="Public/images/icons8-cancel-64.png" onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }}/>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <button onClick={() => navigate('/')}>home</button>
//       </div>
//     </div>
//   );
// }

// export default List;


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
  const [isEditing, setIsEditing] = useState(false);
  const [clickStartTime, setClickStartTime] = useState(0);
  const dispatch = useAppDispatch();
  const itemsArr = useAppSelector((state: RootState) => state.items) as Item[];

  const navigate = useNavigate();

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>, id: number, completed: boolean | undefined) => {
    // Prevent the event from bubbling up and triggering the li click event
    evt.stopPropagation();
    dispatch(toggleItem(id, completed !== undefined ? !completed : false));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItemThunk(id));
  };

  const handleItemMouseDown = (id: number) => {
    setClickStartTime(Date.now());
  };

  const handleItemMouseUp = (id: number) => {
    const clickDuration = Date.now() - clickStartTime;
    // If the click duration is greater than 1 second, open the edit form
    if (clickDuration >= 1000) {
      setEditingItemId(id);
      setIsEditing(true);
    }
  };

  const handleSubmit = (id: number, formData: string) => {
    console.log('submit:', formData);
    dispatch(updateListItemThunk(id, formData));
    setEditingItemId(null);
    setIsEditing(false); // Close the edit form after submission
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
            <li
              key={item.id}
              onMouseDown={() => handleItemMouseDown(item.id)}
              onMouseUp={() => handleItemMouseUp(item.id)}
              className="list-item"
              style={{ cursor: 'pointer' }}
            >
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={item.completed !== undefined ? item.completed : false}
                  onChange={(evt) => handleCheckboxChange(evt, item.id, item.completed)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="item-content">
                {editingItemId === item.id && isEditing ? (
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
                      style={{ cursor: 'pointer' }}
                      onKeyPress={(evt) => {
                        if (evt.key === 'Enter') {
                          handleSubmit(item.id, formData);
                        }
                      }}
                    />
                  </form>
                ) : (
                  <label>
                    <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                      {item.item}
                    </span>
                  </label>
                )}
                <div className="del-btn-container">
                  <img
                    id="del-btn"
                    alt="delete button icon"
                    src="Public/images/icons8-cancel-64.png"
                    onClick={() => handleDelete(item.id)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/')}>home</button>
      </div>
    </div>
  );
}

export default List;








