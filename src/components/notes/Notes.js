import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar'
import { useForm } from './../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export default function Notes() { 

  // Nos quedamos con el estado de notes para manejar
  // el objeto active mediante el custom hooks useForm

  const { active:notes } = useSelector(state => state.notes);
  const [valueForm, setValueForm, reset] = useForm(notes);

  const dispatch = useDispatch();

  const { title, body, id } = valueForm;

  const activeId = useRef(notes.id); 

  // Solamente se cambia la referencia si y solo si
  // los id de la referecia actual es direrente al de 
  // id del notes. 
  useEffect(() => {
    if (notes.id !== activeId.current) {
      reset(notes);
      activeId.current = notes.id
    }
  }, [notes, reset]);

  // Cuando detecte cambion en el valueForm disparará la accion
  // de acutalizar la nota. 
  useEffect(() => {
    dispatch(activeNote(valueForm.id, {...valueForm}));
  }, [valueForm, dispatch])


  // Elimina la nota 
  const handleDeleteNote = () => {
  
    dispatch(startDeleting(id));
  }
  return (
    <div className='notes__main-content flex-column'>
      <NotesAppBar valueForm={ valueForm }/>
      
      <div className='notes__content flex-column'>
        <input 
          autoFocus
          className='notes__title-input'
          name='title'
          placeholder='Escoja un titulo...'
          onChange={setValueForm}
          type='title'
          value={title}
        />

        <textarea
          className='notes__textarea'
          name='body'
          placeholder='¿Que paso hoy?'
          onChange={setValueForm}
          type='text'
          value={body}
        >

        </textarea>
      </div>

      { (notes.url) &&
          <div className='notes__images'>
            <img
              src={notes.url}
              alt='universe'
              className='notes__images-img'
            />
          </div>
      }
      <button
        className='button button-error pointer p-1' 
        onClick={handleDeleteNote}
      >
        {([title, body].includes('')) ? 'Cancelar' : 'Eliminar'}
      </button>
    </div>
  )
}
