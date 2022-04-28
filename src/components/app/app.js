import {Component} from "react";
import AddForm from "../add-form/add-form";
import Notes from "../notes/notes";

import "./app.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.maxId = 0
    }

    additem = (Theme, Note) => {
        const newItem = {
            Theme,
            Note,
            id: ++this.maxId
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AddForm onAdd={this.additem}/>
                <Notes onDelete={this.deleteItem} data={this.state.data}/>
            </div>
        )
    }
}

export default App