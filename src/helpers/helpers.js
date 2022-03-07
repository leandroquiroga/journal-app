import validator from 'validator';
import { removeError, setError } from '../actions/ui';



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
export const isFormsValid = (valueForm, dispatch) => {
  
  const listEmail = ['gmail.com', 'icloud.com', 'hotmail.com.ar', 'live.com.ar', 'outlook.com', 'yahoo.com.ar']
  const { name, email, password, passwordConfirm } = valueForm;

  if (validator.isEmail(email, { host_blacklist: listEmail })) {
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
  } else if (name.trim().length === 0) {
    dispatch(setError('El nombre es requerido'));
    setTimeout(() => dispatch(removeError()), 3000);
    return false;
  }
}