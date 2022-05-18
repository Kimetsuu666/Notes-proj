import {useInputValue} from "../../hooks/hooks";
import "./addForm.scss"

const AddForm = (props) => {
    const title = useInputValue("")
    const description = useInputValue("")

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(title.value, description.value)
        title.onClear()
        description.onClear()
    }

        return (
            <div className="add-form-wrapper">
                <form className="add-form" onSubmit={onSubmit}>
                    <input
                        onChange={title.onChange}
                        value={title.value}
                        type="text"
                        placeholder="Title of note"/>
                    <textarea
                        onChange={description.onChange}
                        value={description.value}
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