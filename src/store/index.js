import { combineReducers, createStore } from "redux";
import notesReducer from "../notes/store/notesReducer";

const store = createStore(
  combineReducers({ notes: notesReducer }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
