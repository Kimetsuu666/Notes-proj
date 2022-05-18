import { useState } from "react";
import AddForm from "./addForm/addForm";
import NoteList from "./noteList/noteList";

import "./noteWrapper/noteWrapper.scss";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    const addItem = (title, description) => {
        const newItem = {
            title,
            description,
            id: Math.floor(Math.random() * (200000 - 100000) + 100000)
        };
        setNotes(prevNotes => [...prevNotes, newItem])
    }

    const deleteItem = (id) => {
        setNotes(notes => notes.filter(item => item.id !== id))
    }

        return (
            <div className="notes">
                <AddForm onAdd={addItem}/>
                <NoteList onDelete={deleteItem} notes={notes}/>
            </div>
        )
    }


export default Notes;