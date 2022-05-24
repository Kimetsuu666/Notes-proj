import { useState } from "react";
import AddForm from "./AddForm/AddForm";
import NoteList from "./NoteList/NoteList";
import {generatorId} from "../generatorId/generatorId";

import "./noteWrapper/NoteWrapper.scss";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    const addItem = (title, description) => {
        const newItem = {
            title,
            description,
            id: generatorId()
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