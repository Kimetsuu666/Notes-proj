import { useState } from "react";
import "./addForm.scss"

const AddForm = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (title.length > 3 && description.length > 3) {
            props.onAdd(title, description)
            setTitle("");
            setDescription("");
        } else {
            alert ("Invalid data")
            setTitle("");
            setDescription("");
        }
    }

        return (
            <div className="add-form-wrapper">
                <form className="add-form" onSubmit={onSubmit}>
                    <input
                        onChange={onChangeTitle}
                        value={title}
                        type="text"
                        placeholder="Title of note"/>
                    <textarea
                        onChange={onChangeDescription}
                        value={description}
                        cols="30"
                        rows="10"
                        placeholder="Write description..."/>
                    <button
                        className="btn"
                        type="submit">Add note</button>
                </form>
            </div>
        )
    }


export default AddForm;