import React from 'react'
import { useDispatch } from 'react-redux';
import { showSidebar } from '../../../actions/ui';

export const NothingSelected = () => {
  const dispatch = useDispatch();

  const handleCloseSidebar = () => dispatch(showSidebar(true))
  return (

    <section
      className='nothing__content flex-column-center pointer'
      onClick={handleCloseSidebar}
    >
      <p className='text-center'>
        Selccione una tarea 
        <br />
        o creé una nueva
      </p>

      <i className='far fa-star fa-2x'></i> 
    </section>
  )
}
