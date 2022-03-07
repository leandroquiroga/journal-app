
import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='flex-row journal__entry pointer'>

      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://p4.wallpaperbetter.com/wallpaper/548/852/23/pink-stars-4k-nebula-wallpaper-preview.jpg)',
        }}
      ></div>

      <div className='p-1'>
        
        <p className='journal__entry-title'>
          Un nuevo amanecer...
        </p>
        <p className='journal__entry-content'>
          Hoy es 3 de marzo y el dia esta nubaldo
        </p>

      </div>

      <div className='journal__entry-date-box flex-column-center'>
        <span> Monday </span>
        <h4>03</h4>
      </div>

    </div>
  )
}
