
import React from 'react'

export const NotesAppBar = () => {
  return (
    <div className='notes__appbar'>
      <span> 3 de marzo 2022 </span>

      <div>
        <button className='button button-secondary mx-2 pointer'>
            Picture
        </button>
        <button className='button button-secondary mx-2 pointer'>
            Save
        </button>
      </div>
    </div>
  ) 
}
