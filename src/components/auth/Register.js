import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import { singUpWithEmailAndPassword } from '../../actions/auth';
import { isFormValid } from './../../helpers/helpers';

export const Register = () => {

  // se queda con el objeto ui de nuestro state
  const state = useSelector(state => state.ui);
  
  const dispatch = useDispatch();

  const { loading, msgError } = state;
  
  const [valueForm, handleValueForm] = useForm({
    name: 'Ema15',
    email: 'ema@gmail.com',
    password: '123456',
    passwordConfirm: '123456'
  });

  const { name, email, password, passwordConfirm } = valueForm;

  // Registramos al usuario
  const handleRegister = (e) => {
    e.preventDefault();

    // Verificamos que los campos sean validos 
    // para realizar el dispath

    if (isFormValid(valueForm, dispatch)) {
      dispatch(singUpWithEmailAndPassword(email,password,name))
      return
    };

  }
  return (
    <>

      <h1 className='auth__title mb-1 text-center my-2'>Registráte</h1>

      <form
        className='flex-column mt-1'
        onSubmit={handleRegister}
      >
        
        <label
          htmlFor='nameUser'
          className='auth__label mb-1'
        >
          Nombre de usuario:
        </label>
        <input 
          id='nameUser'
          autoFocus
          autoComplete='off'
          placeholder='Ingrese su nombre de usuario...'
          type='name'
          name='name'
          value={name}
          onChange={handleValueForm}
          className='auth__input p-1 mb-2 width-100'
        />
        <label
          htmlFor='emailUser'
          className='auth__label mb-1'
        >
          Email:
        </label>
        <input 
          id='emailUser'
          autoFocus
          autoComplete='off'
          placeholder='Ingrese su email...'
          type='email'
          name='email'
          value={email}
          onChange={handleValueForm}
          className='auth__input p-1 mb-2 width-100'
        />

        <label
          htmlFor='passUser'
          className='auth__label mb-1'
        >
          Contraseña:
        </label>
        <input 
          id='passUser'
          placeholder='Ingrese su contraseña...'
          type='password'
          name='password'
          value={password}
          onChange={handleValueForm}
          className='auth__input p-1 mb-2 width-100'
        />
        
        <label
          htmlFor='passConfirmUser'
          className='auth__label mb-1'
        >
          Repite la contraseña:
        </label>
        <input 
          id='passConfirmUser'
          placeholder='Repita la contraseña...'
          type='password'
          name='passwordConfirm'
          value={passwordConfirm}
          onChange={handleValueForm}
          className='auth__input p-1 mb-2 width-100'
        />

        <button
          type='submit'
          className='button button-primary pointer p-2'
          disabled={loading}
        >
          {(loading) ? 'Restrandote...' : 'Registrate'}
        </button>
        {
          (msgError) && <div className='auth__alert-error p-2 text-center'> {msgError} </div>
        }
        <Link
          to='/auth/login'
          className='link mt-2'
        >
          
          ¿Ya tienes cuenta? Inicia sesíon
        </Link>
      </form> 
    </>
  )
}