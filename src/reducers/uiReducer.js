import { types } from './../types/types';

const initailState = {
  loading: false,
  msgError: null
}

export const uiReducer = (state = initailState, action) => {
  
  const { type, payload } = action; 

  switch (type) {
    case types.uiSetError: 
      return {
        ...state,
        msgError: payload,
      }
    
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      }
    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    case types.setShowSidebar:
      return {
        ...state,
        show: payload,
      };
    default:
      return state;
  }
}