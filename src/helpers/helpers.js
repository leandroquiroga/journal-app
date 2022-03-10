import validator from 'validator';
import { removeError, setError } from '../actions/ui';
import { db } from './../firebaseConfig';



export const isFormValid = (valueFrom, dispatch) => {
  
  const listEmail = ['gmail.com', 'icloud.com' ,'hotmail.com.ar', 'live.com.ar', 'outlook.com' , 'yahoo.com.ar']
  const { name, email, password, passwordConfirm } = valueFrom;

  if (name.trim().length === 0) {
    dispatch(setError('El nombre es requerido'));
    setTimeout(() => dispatch(removeError()), 3000);
    return false;
  } else if (validator.isEmail(email, { host_blacklist: listEmail })) {
    dispatch(setError('El email no es valido'));
    setTimeout(() => dispatch(removeError()), 3000);
    return false;
  } else if (password !== passwordConfirm) {
    dispatch(setError('Las contraseña no coinciden'));
    setTimeout(() => dispatch(removeError()), 3000);
    return false;
  } else if (!validator.isLength(password, 6, 15)) {
    dispatch(setError('La contraseña debe tener entre 6 y 15 carcateres'));
    setTimeout(() => dispatch(removeError()), 3000);
    return false
  }

  dispatch(removeError());
  return true

}
export const isFormsValidLogin = (dispatch, error) => {


  switch (error) {
    case 'auth/user-not-found':
      dispatch(setError('El usuario no exite'));
      setTimeout(() => dispatch(removeError()), 3000);
      return;
    case 'auth/wrong-password': 
      dispatch(setError('La contraseña es invalida'));
      setTimeout(() => dispatch(removeError()), 3000);
      return;
    case 'auth/email-already-in-use':
      dispatch(setError('El usuario ya existe'));
      setTimeout(() => dispatch(removeError()), 3000);
      return;
    default:
      return
  }
}


// Carga de notas desde la base de datos
export const loadNotes = async (uid) => {

  const noteSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  noteSnap.forEach(snap => {
    notes.push({
      id: snap.id,
      ...snap.data(),
    });
  });

  return notes;
}