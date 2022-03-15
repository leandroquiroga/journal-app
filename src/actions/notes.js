import { db } from "../firebaseConfig";
import { fileUpload, loadNotes, mediaQueryMobile } from "../helpers/helpers";
import { types } from './../types/types';
import Swal from "sweetalert2";
import { showSidebar } from "./ui";

// Añadimos una nueva nota a la base de datos
export const addNewNotes = () => {

  return async (dispatch, getState) => {

    // Obtenemos el estado de auth
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    if (mediaQueryMobile()) dispatch(showSidebar(false))
    // Realizamos la referencia al documento y agregamos el objeto
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    // disparamos el funcion al reducer
    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));

  };
};

// Cargamos las notas desde la base de datos de firestore
export const loadingNotes = (uid) => {
  
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));  
    dispatch(showSidebar(true))
  }
}


// Guadamos las nota en la base de datos de firestore y 
// realizamos el refresh en el panel de actividades.
export const saveNotes = (note) => {
  
  return async (dispatch, getState) => {
    const { uid } = getState().auth;


    // Evitamos que guarde datos undefined eliminandolo de note
    if (!note.url) delete note.url;

    // Clonamos el objeto note para eliminar la llave id
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    try {
      
      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore);
      
      dispatch(refreshNote(note.id, noteToFireStore));
      
      
      // aca va el toastify de react con el mensaje de sactificacion
      Swal.fire(
        'Buen Trabajo !',
        'Has guradado una nota',
        'success'
        )
        
      if (mediaQueryMobile()) dispatch(showSidebar(true))
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Lo siento !',
        'Hubo un error',
        'error'
      )
    };
  };
};


export const startUploading = (file) => {

  return async (dispatch, getState) => {

    const { active: activeNote } = getState().notes;

    // aca va el toastify de react con el mensaje cargando
    Swal.fire({
      title: 'Subiendo Imagen...',
      text: 'Cargando...',
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    });


    const fileResponse = await fileUpload(file);

    activeNote.url = fileResponse;

    dispatch(saveNotes(activeNote));

    // aca va el toastify de react con el mensaje success
    Swal.close();
  };
}; 


export const startDeleting = (id) => {
  return (dispatch, getState) => {
    
    const { uid } = getState().auth;

    try {
      Swal.fire({
        title: 'Estas seguro de eliminar la nota?',
        text: "Los datos no se pueden recuperar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#202020',
        cancelButtonColor: '#a70707',
        confirmButtonText: 'Si, eliminalo'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await db.doc(`${uid}/journal/notes/${id}`).delete();
    
          dispatch(deleteNote(id));
          if (mediaQueryMobile()) dispatch(showSidebar(true))

          Swal.fire(
            'Tarea eliminada',
            'Has eliminado una nota',
            'success'
          )
        }
      })
      
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Lo siento !',
        'Hubo un error',
        'error'
      )
    }

  };
};

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  }
})

export const activeNote = (id, notes) => ({
  type: types.notesActive,
  payload: {
    id,
    ...notes,
  },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    },
  },
});

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});