// import { useState, ChangeEvent, FormEvent } from 'react';
// import { useAppDispatch } from '../hooks/hooks';
// import { ItemData } from '../../models/types';
// import * as actions from "../actions/items";

// function AddItem() {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState({} as ItemData)
 

//   const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [evt.target.name]: evt.target.value,
//     })
//   }

//   const handleSubmit = (evt: FormEvent) => {
//     evt.preventDefault();
//     dispatch(actions.addItemThunk(formData))
//   }

//   return (
//     <div className="input-container">
     
//         <form className="list-form" onSubmit={handleSubmit}>
//           <div className="form-row">
//             <label className="add-form-label" htmlFor="item">
//               Item:
//             </label>
//             <input
//               placeholder="Enter item name"
//               type="text"
//               id="item"
//               name="item"
//               value={formData.item}
//               onChange={handleChange}
//             />
//           </div>

//           <input type="submit" value="SUBMIT" className="submit-button" />
//         </form>
     
//     </div>
//   );
// }

// export default AddItem;





import { useState, ChangeEvent, KeyboardEvent } from 'react'; // changed to keyboard event from form event
import { useAppDispatch } from '../hooks/hooks';
import { ItemData } from '../../models/types';
import * as actions from '../actions/items';

function AddItem() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({} as ItemData);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      addItem();
    }
  };

  const addItem = () => {
    dispatch(actions.addItemThunk(formData));
    setFormData({} as ItemData);
  };

  return (
    <div className="input-container">
      <form className="list-form">
        <div className="form-row">
          <label className="add-form-label" htmlFor="item">
            Item:
          </label>
          <input
            placeholder="Enter item name"
            type="text"
            id="item"
            name="item"
            value={formData.item || ''}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Add the keydown event handler
          />
        </div>
      </form>
    </div>
  );
}

export default AddItem;
