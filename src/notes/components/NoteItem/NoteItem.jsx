import React from "react";
import PropTypes from "prop-types";
import "./NoteItem.scss";

function NoteItem(props) {
  const { onDelete, note } = props;
  return (
    <div className="noteItems">
      <div className="noteItem">
        <h2 className="title">{note.title}</h2>
        <button onClick={onDelete} className="trash" type="button">
          <i className="fas fa-trash" />
        </button>
        <p className="text">{note.description}</p>
      </div>
    </div>
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
