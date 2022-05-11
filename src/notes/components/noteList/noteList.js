import NoteItem from "../noteItem/noteItem";
import "./noteList.scss";

const NoteList = ({data, onDelete}) => {
    const elements = data.map(item => {
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
        <div className="notes">
            {elements}
        </div>
    )
}

export default NoteList;