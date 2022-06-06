import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useInputValue } from "../../hooks/hooks";
import { updateNote } from "../../store/notesActions";
import "./NoteItem.scss";

function NoteItem(props) {
  const dispatch = useDispatch();
  const { onDelete, note } = props;
  const title = useInputValue(note.title);
  const description = useInputValue(note.description);

  const onUpdate = () => {
    const editedNote = {
      title: title.value,
      description: description.value,
      id: note.id,
    };
    dispatch(updateNote(editedNote));
  };

  return (
    <form className="noteItems">
      <div className="noteItem">
        <input
          onChange={title.onChange}
          onBlur={onUpdate}
          value={title.value}
          className="title"
        />
        <textarea
          onChange={description.onChange}
          onBlur={onUpdate}
          value={description.value}
          className="text"
          cols="30"
          rows="10"
        />
        <button onClick={onDelete} className="trash" type="button">
          <i className="fas fa-trash" />
        </button>
      </div>
    </form>
  );
}

NoteItem.defaultProps = {
  note: [],
  onDelete: () => {},
};

NoteItem.propTypes = {
  note: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};

export default NoteItem;
