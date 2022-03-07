import React from 'react'

export const NothingSelected = () => {
  return (
      <section className='nothing__content flex-column-center'>
        <p className='text-center'>
          Selccione una tarea 
          <br />
          o creé una nueva
        </p>

        <i className='far fa-star fa-2x'></i> 
      </section>
  )
}
