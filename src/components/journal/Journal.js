import React from 'react'
import Notes from '../notes/Notes'
// import { NothingSelected } from './components/NothingSelected'
import { Sidebar } from './components/Sidebar'

export const Journal = () => {
  return (
    <div className='journal__main-content'>

      <Sidebar />
      <main className='width-100 m-0'>
        {/* <NothingSelected /> */}

        <Notes/>
      </main>
    </div>
  )
}
