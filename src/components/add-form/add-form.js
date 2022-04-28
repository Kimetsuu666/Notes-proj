import {Component} from "react";

import "./add-form.scss"

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Theme: "",
            Note: "",
        }
    }

    onValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.Theme.length > 3 && this.state.Note.length > 3) {
            this.props.onAdd(this.state.Theme, this.state.Note)
            this.setState({
                Theme: "",
                Note: ""
            })
        } else {
            alert ("Invalid data")
            this.setState({
                Theme: "",
                Note: ""
            })
        }
    }

    render() {
        const {Theme, Note} = this.state;
        return (
            <div className="add-form-wrapper">
                <form className="add-form" onSubmit={this.onSubmit}>
                    <input
                        onChange={this.onValue}
                        value={Theme}
                        name="Theme"
                        type="text"
                        placeholder="Тема заметки"/>
                    <textarea
                        onChange={this.onValue}
                        value={Note}
                        name="Note"
                        cols="30"
                        rows="10"
                        placeholder="Напишите заметку..."/>
                    <button
                        className="btn"
                        type="submit">Добавить</button>
                </form>
            </div>
        )
    }
}

export default AddForm;