
import React from 'react'
import { JournaEntries } from './JournaEntries'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../actions/auth';

export const Sidebar = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);

  console.log(state)

  const handleLogout = () => {
    dispatch(startLogout());
  }
  return (
    <aside className='journal__sidebar flex-column px-2'>

      <nav className='journal__sidebar-navbar'>
        <h3 className='mt-2'>
          <i className='far fa-moon'></i>
          <span> {state.name}</span>
        </h3>

        <button
          className='button button-secondary p-1 pointer mt-2'
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </nav>

      <article className='journal__new-entry flex-column-center width-100 pointer'>
        <i className='far fa-calendar-plus fa-4x'></i>
        <p className='mt-2'> Nueva acción </p>
      </article>

      <JournaEntries />
    </aside>
  )
}
