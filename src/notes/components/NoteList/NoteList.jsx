import React from "react";
import PropTypes from "prop-types";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.scss";

function NoteList({ notes, onDelete }) {
  const elements = notes.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <NoteItem key={id} otherProps={itemProps} onDelete={() => onDelete(id)} />
    );
  });

  return <div className="notes-wrapper">{elements}</div>;
}

NoteList.defaultProps = {
  notes: PropTypes.array,
  onDelete: () => {},
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf,
  onDelete: PropTypes.func,
};

export default NoteList;
