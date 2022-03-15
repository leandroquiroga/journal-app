import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveNotes, startUploading } from '../../actions/notes';
import logoOpen  from './../../assets/open.svg'
import moment from 'moment';
import 'moment/locale/es';
import { showSidebar } from '../../actions/ui';

export const NotesAppBar = ({ valueForm }) => {

  const { body, title } = valueForm;
  const currentlyDate = new Date().getTime()
  const dateFormat = moment(currentlyDate);
  const dispatch = useDispatch();

  // extraemos la nota activa;
  const {active:note} = useSelector(state => state.notes);

  // Toma el control del input of type file
  const handleUpPicture = () => document.querySelector('#upLoadPicture').click()

  // Permite subir una imagen
  const handleChangePicture = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file))
    };
  }

  // Dispara la accion de guardar la nota activa
  const handleSaveNote = () => dispatch(saveNotes(note))

  const handleOpenSidebar = () => dispatch(showSidebar(true))
  
  return (
    <div className='notes__appbar'>
      <span
        onClick={handleOpenSidebar}
        className='pointer journal__sidebar-icon '
      >
        <img 
          src={logoOpen}
          alt='open'
        />
      </span>
      <span> {dateFormat.format("DD dddd YYYY")} </span>
      <input 
        id='upLoadPicture'
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleChangePicture}
      />
      <div>
        <button
          className='button button-secondary mx-2 pointer'
          onClick={handleUpPicture}
        >
          Picture
        </button>
        <button
          className='button button-secondary mx-2 pointer'
          onClick={handleSaveNote}
          disabled={(title !== '' && body !== '') ? false : true}
        >
          {(title !== '' && body !== '') ? 'Save Change' : 'Save '}
        </button>
      </div>
    </div>
  ) 
}
