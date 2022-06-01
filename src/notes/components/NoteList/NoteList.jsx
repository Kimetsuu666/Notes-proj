import React from "react";
import PropTypes from "prop-types";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.scss";

function NoteList({ notes, onDelete }) {
  const elements = notes.map((item) => {
    const { id } = item;
    return <NoteItem key={id} note={item} onDelete={() => onDelete(id)} />;
  });

  return <div className="notes-wrapper">{elements}</div>;
}

NoteList.defaultProps = {
  notes: [],
  onDelete: () => {},
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
    })
  ),
  onDelete: PropTypes.func,
};

export default NoteList;
