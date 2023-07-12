import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import * as itemActions from '../actions/items'
import List from './List'

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(itemActions.getItemsThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <List />
     
    </>
  )
}

export default App
