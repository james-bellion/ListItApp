import List from './List'
import AddItem from './AddItem'
import { useAppDispatch } from '../hooks/hooks'
import { useEffect } from 'react'
import * as itemsActions from "../actions/items" 

import { Outlet } from 'react-router-dom'


function App() {

  

  // useEffect(() => {
  //   dispatch(itemsActions.getItemsThunk())
  // }, [dispatch])


  return (
    <>
      {/* <header className="header">
        <h1>My Collection</h1>
      </header>
      <AddItem />
      <List /> */}

      <Outlet />
     
    </>
  )
}

export default App
