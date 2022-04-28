import "./note-items.scss";


const NoteItems = (props) => {
    const {Theme, Note, onDelete} = props
    return (
        <div className="noteItems">
            <div className="noteItem">
                <h2 className="title">{Theme}</h2>
                <button onClick={onDelete} className="trash" type="button">
                    <i className="fas fa-trash"></i>
                </button>
                <p className="text">{Note}</p>
            </div>
        </div>


    )
}

export default NoteItems;