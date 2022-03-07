import React from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from './../../hooks/useForm';

export default function Notes() {

  const [valueForm, setValueForm] = useForm({
    title: '',
    text: '',
  });

  const { title, text } = valueForm;

  return (
    <div className='notes__main-content flex-column'>
      <NotesAppBar />
      
      <div className='notes__content flex-column'>
        <input 
          className='notes__title-input'
          name='title'
          placeholder='Escoja un titulo...'
          onChange={setValueForm}
          type='title'
          value={title}
          autoFocus
        />

        <textarea
          className='notes__textarea'
          name='text'
          placeholder='¿Que paso hoy?'
          onChange={setValueForm}
          type='text'
          value={text}
        >

        </textarea>
      </div>

      <div className='notes__images'>
        <img
          src='https://allegra.flowersetcfresno.com/pic/645612_full-fondos-de-pantalla-del-espacio-4k-tecnovanguardia-pack-2-0-50-fondos-de-pantalla-para-celular-y.jpg'
          alt='universe'
          className='notes__images-img'
        />
      </div>

    </div>
  )
}
