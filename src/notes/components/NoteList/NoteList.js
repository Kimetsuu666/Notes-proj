import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.scss";

const NoteList = ({notes, onDelete}) => {
    const elements = notes.map(item => {
        const {id, ...itemProps} = item;
        return (
            <NoteItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <div className="notes-wrapper">
            {elements}
        </div>
    )
}

export default NoteList;