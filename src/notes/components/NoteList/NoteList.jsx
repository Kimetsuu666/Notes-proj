import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.scss";
import { deleteNote } from "../../store/notesActions";

function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
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
