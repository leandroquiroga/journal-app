import { types } from './../types/types';

const initialState = {
  notes: [],
  active: null,
}

export const notesReducer = (state = initialState, action) => {
  
  switch (action.type) {
    // activa la nota y retorna la copia del estado y el objeto 
    // de active con lo que reciber del action.payload
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map(
          note => note.id === action.payload.id
            ? action.payload.note
            : note
        ),
      };
    
    case types.notesDelete: 
      return {
        ...state,
        active: null,
        notes: state.notes.filter(note => note.id !== action.payload),
      }
    
    case types.notesLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: [],
      }
    
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }
    default:
      return state;
  }
}