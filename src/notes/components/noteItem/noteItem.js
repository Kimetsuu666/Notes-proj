import "./noteItem.scss";


const NoteItem = (props) => {
    const {title, description, onDelete} = props
    return (
        <div className="noteItems">
            <div className="noteItem">
                <h2 className="title">{title}</h2>
                <button onClick={onDelete} className="trash" type="button">
                    <i className="fas fa-trash"></i>
                </button>
                <p className="text">{description}</p>
            </div>
        </div>


    )
}

export default NoteItem;