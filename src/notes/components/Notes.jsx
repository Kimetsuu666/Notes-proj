import React from "react";
import AddForm from "./AddForm/AddForm";
import NoteList from "./NoteList/NoteList";
import "./noteWrapper/NoteWrapper.scss";

function Notes() {
  return (
    <div className="notes">
      <AddForm />
      <NoteList />
    </div>
  );
}

export default Notes;
