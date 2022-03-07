import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import { googleAuthSignUp, startLoginEmailPassword } from './../../actions/auth';
// import { isFormsValid } from '../../helpers/helpers';

export const Login = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => state.ui);

  const { loading ,msgError } = state
  const [valueForm, handleValueForm] = useForm({
    email: 'leandro@gmail.com',
    password: '1234564'
  });
  const { email, password } = valueForm;


  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLoginEmailPassword(email, password));

  };

  const handleLoginWithGoogle = () => {
    dispatch(googleAuthSignUp());
  }
  return (
    <>

      <h1 className='auth__title mb-1 text-center my-2'>Inicia sesión</h1>

      <form
        className='flex-column mt-1'
        onSubmit={handleLogin}
      >
        
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

        <button
          type='submit'
          className='button button-primary pointer p-2'
          disabled={loading}
        >
          {(loading) ? 'Cargando...' : 'Iniciar Sesion'}
        </button>
        {
          (msgError) && <div className='auth__alert-error p-2 text-center'> {msgError} </div>
        }
        <small className='text-center my-1'> O </small>

        <article
          className='google-btn pointer width-100'
          onClick={handleLoginWithGoogle}
        >
          
          <div className='google-icon-wrapper'>
            <img
              className='google-icon' 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />  
          </div>

          <p className='btn-text text-center'>
            <b> Inicia con Google </b>
          </p>
        </article>

        <Link
          to='/auth/register'
          className='link mt-2'
        >
          Crear una nueva cuenta
        </Link>
      </form> 
    </>
  )
}
