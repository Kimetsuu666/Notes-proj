import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.scss";
import { deleteNote } from "../../store/notesActions";
import { getNotes } from "../../store/selectors";

function NoteList() {
  const dispatch = useDispatch();
  const { notes } = useSelector(getNotes);
  if (notes.length === 0) {
    return <h1 className="no-notes">No notes</h1>;
  }
  const elements = notes.map((item) => {
    const { id } = item;
    return (
      <NoteItem
        key={id}
        note={item}
        onDelete={() => dispatch(deleteNote(id))}
      />
    );
  });

  return <div className="notes-wrapper">{elements}</div>;
}

export default NoteList;
