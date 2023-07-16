import List from './List'
import AddItem from './AddItem'
import { useAppDispatch } from '../hooks/hooks'
import { useEffect } from 'react'
import * as itemsActions from "../actions/items" 

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(itemsActions.getItemsThunk())
  }, [dispatch])


  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <AddItem />
      <List />
     
    </>
  )
}

export default App
