import { types } from './../types/types';
import { app, googleAuthProvaider } from './../firebaseConfig';
import { finishLoading, startLoading } from './ui';
import { isFormsValidLogin } from '../helpers/helpers';

// Las acciones son aquellas que vamos a utlizar
// para indicar al reducer que determinaciones
// va a realizar

export const startLoginEmailPassword = (email, password) => {

  return (dispatch) => {

    dispatch(startLoading());
    app.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(finishLoading());
        
        dispatch(
          login(user.uid, user.displayName),
        );
          
      }).catch(error => {
        dispatch(finishLoading());
        isFormsValidLogin(dispatch, error.code)
      });
  };
}  


// Nos permite crear un usario con firebase
export const singUpWithEmailAndPassword = (email, password, name) => {

  return (dispatch) => {

    dispatch(startLoading());
    app.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {

        await user.updateProfile({ displayName: name })
        
        dispatch(finishLoading());
        
        dispatch(
          login(user.uid, user.displayName),
        );

      }).catch(() => {
        dispatch(finishLoading());
      }); 
  }
}


// Nos permite autenticarnos con googleSingUp
export const googleAuthSignUp = () => {

  return (dispatch) => {
    app.auth().signInWithPopup(googleAuthProvaider)
      .then(({user}) => {
        dispatch(
            login(user.uid, user.displayName)
        )
    }).catch(error => console.log(error))
  };
  
}

// Cerrar sesion
export const startLogout = () => {
  
  return async (dispatch) => {
    await app.auth().signOut();
    dispatch(logout());
    dispatch(noteCleaning());
  }
};


export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,  
    displayName,
  }
});

export const logout = () => ({
  type:types.logout
})

export const noteCleaning = () => ({
  type: types.notesLogoutCleaning,
});