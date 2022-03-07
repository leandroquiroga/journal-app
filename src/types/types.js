
// Contiene todos los types que va a tener el reducer

export const types = {

  // type of auth
  login: '[Auth] Login',
  logout: '[Auth] Logout',


  // type of ui error 
  uiSetError: '[UiError] Set Error', 
  uiRemoveError: '[UiError] Remove Error',

  //types of loading... 
  uiStartLoading: '[UI] Start Loading',
  uiFinishLoading: '[UI] Finish Loading'
}