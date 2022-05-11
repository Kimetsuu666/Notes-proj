import { useState } from "react";
import AddForm from "./addForm/addForm";
import NoteList from "./noteList/noteList";

import "./noteWrapper/noteWrapper.scss";

const Notes = () => {
    const [data, setData] = useState([]);
    let maxId = 0

    const addItem = (title, description) => {
        const newItem = {
            title,
            description,
            id: ++maxId
        };
        setData(data => [...data, newItem])
    }

    const deleteItem = (id) => {
        setData(data => data.filter(item => item.id !== id))
    }

        return (
            <div className="note">
                <AddForm onAdd={addItem}/>
                <NoteList onDelete={deleteItem} data={data}/>
            </div>
        )
    }


export default Notes;