import React from "react";
import PropTypes from "prop-types";
import "./NoteItem.scss";
import { Link } from "react-router-dom";

function NoteItem(props) {
  const { onDelete, note } = props;
  return (
    <div className="noteItems">
      <div className="noteItem">
        <div className="title">{note.title}</div>
        <div className="text">{note.description}</div>
        <button onClick={onDelete} className="trash" type="button">
          <i className="fas fa-trash" />
        </button>
        <Link className="link" to={`/notes/${note.id}`}>
          <button className="edit" type="button">
            <i className="fa fa-pencil" aria-hidden="true" />
          </button>
        </Link>
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
