import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';

import { Journal } from '../components/journal/Journal';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { app } from '../firebaseConfig';
import { login } from '../actions/auth';
import { Spinner } from '../components/spinner/Spinner';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const [preLoading, setPreLoading] = useState(true);
  const [isLogging, setIsLogging] = useState(false);
  const dispatch = useDispatch();

  // Nos permite observar los cambios de la autenticacion de los usuarios

  useEffect(() => {
    app.auth().onAuthStateChanged(async(user) => {

      // Si exite el uid del user, dispara la accion del login
      // cambia el isLogging a true
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogging(true);

        // Carga los datos de la base de datos
        dispatch(loadingNotes(user.uid));
      } else {
        setIsLogging(false)
      }

      setPreLoading(false);
    });
  }, [dispatch, setPreLoading, setIsLogging]);

  // Preloaing (realizar un componente)
  if (preLoading) {
    return (
      <div className='preloading__content flex-row-center'>
        <Spinner 
          textContent='Cargando...'
          flexStyle='flex-column-center'
        />
      </div>
    )
  }
  return (
    <Router>
      <Switch>
        
        <PublicRoute
          path='/auth' 
          isAuthenticated={ isLogging }
          component={ AuthRouter }  
        />
          

        <PrivateRoute
          exact
          isAuthenticated={ isLogging }
          path='/' 
          component={ Journal }  
        />
        
        <Redirect to='/auth/login'/>
      </Switch>

    </Router>
  )
}
