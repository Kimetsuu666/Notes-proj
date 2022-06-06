import * as actionTypes from "./notesConstants";

const {
  ADD_NOTE_ACTION_TYPE,
  DELETE_NOTE_ACTION_TYPE,
  UPDATE_NOTE_ACTION_TYPE,
} = actionTypes;

export const addNote = (note) => {
  return {
    type: ADD_NOTE_ACTION_TYPE,
    payload: note,
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE_ACTION_TYPE,
    payload: id,
  };
};

export const updateNote = (note) => {
  return {
    type: UPDATE_NOTE_ACTION_TYPE,
    payload: note,
  };
};
