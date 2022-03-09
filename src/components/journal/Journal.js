import React from 'react'
import { useSelector } from 'react-redux'
import Notes from '../notes/Notes'
import { NothingSelected } from './components/NothingSelected'
import { Sidebar } from './components/Sidebar'

export const Journal = () => {

  const state = useSelector(state => state);

  const { notes } = state;
  return (
    <div className='journal__main-content'>

      <Sidebar />
      <main className='width-100 m-0'>
        
        {
          (notes.active === null) 
          ? (<NothingSelected /> )
          : (<Notes/>)
        }

      </main>
    </div>
  )
}
