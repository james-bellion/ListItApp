import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { toggleItem, getItemsThunk } from '../actions/items'
import { RootState } from '../store'
import { Item, ItemData } from '../../models/types'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as action from '../actions/items'

function List() {
  const [formData, setFormData] = useState<string>('')
  const [showForm, setShowForm] = useState(false)
  const dispatch = useAppDispatch()
  const itemsArr = useAppSelector((state: RootState) => state.items) as Item[]

  const handleCheckboxChange = (id: number, completed: boolean) => {
    dispatch(toggleItem(id, completed))
  }

  const handleDelete = (id: number) => {
    dispatch(action.deleteItemThunk(id))
  }

  const handleSubmit = (evt: FormEvent, id: number, formData: string) => {
    evt.preventDefault()
    console.log('submit:', formData)
    dispatch(action.updateListItemThunk(id, formData))
  }

  // const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
  //   setFormData(Number(evt.target.value))
  // }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFormData(value);
  }
   

  useEffect(() => {
    dispatch(getItemsThunk())
  }, [dispatch])

  return (
    <div>
      <h1>My List</h1>
      <ul>
        {itemsArr.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id, item.completed)}
              />
              <span
                style={{
                  textDecoration: item.completed ? 'line-through' : 'none',
                }}
              >
                {item.item}
              </span>
            </label>
            <button onClick={() => handleDelete(item.id)}>Delete</button>

            <button
              className="update-btn"
              onClick={() => setShowForm(!showForm)}
            >
              Update Rating
            </button>
            {showForm && (
            <form onSubmit={(evt) => handleSubmit(evt, item.id, formData)}>
            <label htmlFor="rating">Update Rating</label>
            <input
              type="text"
              id="new-item"
              name="new-item"
              value={formData}
              onChange={handleChange}
            />
            <input type="submit" value="Update" />
          </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
