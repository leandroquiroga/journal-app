import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';
import { uiReducer } from "../reducers/uiReducer";

// Configuracion inicial del store
// La mejor manera es convinar todos los reducer, en un solo
// objeto ya que a la hora de crearlo no podemos pasarle todos
// los reduce creados, para esto redux nos permite utilizar
// funciones especiales que nos facilita el trabajo

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
);