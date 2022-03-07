import { types } from "../types/types";

// Lo ideal es tener un reducer por cada tarea que querramos
// utilizar, asi es la manera mas sencilla de poder trabajarlos

export const authReducer = (state = {} , action) => {

  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.id,
        name: action.payload.displayName,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
}