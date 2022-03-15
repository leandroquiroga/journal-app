
import React from 'react';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../../actions/notes';
import { mediaQueryMobile } from '../../../helpers/helpers';
import { showSidebar } from '../../../actions/ui';
import moment from 'moment';
import 'moment/locale/es'

export const JournalEntry = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch();
  const noteDate = moment(date);

  // Funcion que activa el estado de las tareas
  const handleEntryClick = () => {
    dispatch(activeNote(id, {date, title, body, url}));
    if (mediaQueryMobile()) dispatch(showSidebar(false))
  }
  return (
    <div
      className='animate__animated animate__fadeInLeft flex-row journal__entry pointer'
      onClick={handleEntryClick}
    >

      {
        (url) &&
            <div
              className='journal__entry-picture'
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${url})`
            }}
            ></div>
      }

      <div className='p-1'>
        
        <p className='journal__entry-title'> {title} </p>
        <p className='journal__entry-content'> {body} </p>

      </div>

      <div className='journal__entry-date-box flex-column-center'>
        <span> {noteDate.format('dddd')} </span>
        <h4>{ noteDate.format('DD') }</h4>
      </div>

    </div>
  )
}