import { Item } from '../../models/types'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useState, ChangeEvent, FormEvent } from 'react'

function List() {
const dispatch = useAppDispatch()    
const itemsArr = useAppSelector((state) => state.items) as Item[]

    return (
      <>
      <div>
        <h1>My List</h1>
        {itemsArr.map((item) => (
            <div key={item.id} className='list-item'>
                <h2>
                    {item.item}
                </h2>
            </div>
        ))}

      </div>
      </>
    )
  }
  
  export default List