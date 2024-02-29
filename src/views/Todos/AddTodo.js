import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAddTodo = () => {
        if (!this.state.title) {
            toast.error('missing title')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
    }

    render() {
        let { title } = this.state
        return (

            <div className="add-todo">
                <input type='text' value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)} />
                <button className="add" type='button'
                    onClick={() => this.handleClickAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo