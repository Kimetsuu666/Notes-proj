import NoteItems from "../note-items/note-items";
import "./notes.scss";

const Notes = ({data, onDelete}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <NoteItems
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <div className="notes">
            {elements}
        </div>
    )
}

export default Notes;