import * as actionTypes from "./notesConstants";

const {
  ADD_NOTE_ACTION_TYPE,
  DELETE_NOTE_ACTION_TYPE,
  UPDATE_NOTE_ACTION_TYPE,
} = actionTypes;

const initialState = {
  notes: [],
};

// eslint-disable-next-line default-param-last
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE_ACTION_TYPE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE_ACTION_TYPE:
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== action.payload),
      };
    case UPDATE_NOTE_ACTION_TYPE: {
      const { payload } = action;
      const itemIndex = state.notes.findIndex((item) => item.id === payload.id);
      const editedNotes = [
        ...state.notes.slice(0, itemIndex),
        payload,
        ...state.notes.slice(itemIndex + 1),
      ];
      return {
        ...state,
        notes: editedNotes,
      };
    }
    default:
      return state;
  }
};

export default notesReducer;
