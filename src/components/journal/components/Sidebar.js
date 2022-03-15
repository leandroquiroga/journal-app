import React from 'react'
import { JournaEntries } from './JournaEntries'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../actions/auth';
import { addNewNotes } from '../../../actions/notes';
import logoClose from '../../../assets/close.svg'
import { showSidebar } from '../../../actions/ui';

export const Sidebar = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const notes = useSelector(state => state.notes.notes);
  const { show } = useSelector(state => state.ui);

  const handleLogout = () => dispatch(startLogout());

  const handleAddNewNote = () => {
    dispatch(addNewNotes());
  };
  
  const handleCloseSidebar = () => {
    dispatch(showSidebar(false))
  };

  
  // show ? 'journal__sidebar flex-column px-2 sidebar-show' : 'journal__sidebar flex-column px-2 sidebar-hidden'
  return (
    <aside
      className={(show)
        ? 'journal__sidebar flex-column px-2 sidebar-show animate__animated animate__fadeInLeft'
        : 'journal__sidebar flex-column px-2 sidebar-hidden animate__animated animate__fadeOutLeft'
      }
    >

      <nav className='journal__sidebar-navbar'>
        
        {
         (notes.length > 0) &&
          <div
            className='journal__sidebar-icon pointer'
            onClick={handleCloseSidebar}
          >
              <img 
              className='mt-2'  
              src={logoClose}
              alt='close'
            />
          </div>
        }
        <p className='mt-2'>
          <i className='far fa-moon'></i>
          <span className='text-center'> {state.name} </span>
        </p>

        <button
          className='button button-secondary p-1 pointer mt-2'
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </nav>

      <article
        className='journal__new-entry flex-column-center width-100 pointer'
        onClick={handleAddNewNote}
      >
        <i className='far fa-calendar-plus fa-4x'></i>
        <p className='mt-2'> Nueva acción </p>
      </article>

      <JournaEntries />
    </aside>
  )
}