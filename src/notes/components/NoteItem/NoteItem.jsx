import React from "react";
import PropTypes from "prop-types";
import "./NoteItem.scss";

function NoteItem(props) {
  const { otherProps, onDelete } = props;
  const { title, description } = otherProps;
  return (
    <div className="noteItems">
      <div className="noteItem">
        <h2 className="title">{title}</h2>
        <button onClick={onDelete} className="trash" type="button">
          <i className="fas fa-trash" />
        </button>
        <p className="text">{description}</p>
      </div>
    </div>
  );
}

NoteItem.defaultProps = {
  otherProps: [],
  onDelete: () => {},
  title: "",
  description: "",
};

NoteItem.propTypes = {
  otherProps: PropTypes.arrayOf,
  onDelete: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default NoteItem;
