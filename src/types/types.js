
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
  uiFinishLoading: '[UI] Finish Loading',

  // types of note
  notesAddNew: '[Notes] New note',
  notesActive: '[Notes] Set active note',
  notesLoad: '[Notes] Load notes',
  notesUpdated: '[Notes] Update note',
  notesFileUrl: '[Notes] Update image url',
  notesDelete: '[Notes] Delete note',
  notesLogoutCleaning: '[Notes] Logout Cleanig',

  //types of ui mobile
  setShowSidebar: '[Sidebar] Show Sidebar',

}