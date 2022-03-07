import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Journal } from '../components/journal/Journal';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { app } from '../firebaseConfig';
import { login } from '../actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch()
  
  // Nos permite observar los cambios de la autenticacion de los usuarios
  useEffect(() => {
    
    app.auth().onAuthStateChanged((user) => {

      // Si exite el uid del user, dispara la accion del login. 
      if (user?.uid) {
        dispatch(
          login(user.uid, user.displayName)
        )
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        
        <Route
          path='/auth' 
          component={AuthRouter}  
        />
          

        <Route
          exact
          path='/' 
          component={Journal}  
        />
        
        <Redirect to='/auth/login'/>
      </Switch>

    </Router>
  )
}
