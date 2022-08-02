import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddForm from "./AddForm/AddForm";
import NoteList from "./NoteList/NoteList";
import UpdateNote from "./UpdateNote/UpdateNote";
import NavBar from "./NavBar/NavBar";
import "./noteWrapper/NoteWrapper.scss";

function Notes() {
  return (
    <Router>
      <div className="notes">
        <NavBar />
        <Routes>
          <Route path="/" element={<AddForm />} />
          <Route path="/notes" element={<NoteList />} />
          <Route path="/notes/:id" element={<UpdateNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Notes;
