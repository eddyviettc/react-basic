import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Color from "../HOC/color";




class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'doing housework' },
            { id: 'todo3', title: 'love reverie' },
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {

        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })
        toast.success('Adding succeed')

    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.ListTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            ListTodos: currentTodo
        })
        toast.success('Deleting succeed')

    }
    handleEditTodo = (todo) => {
        let { editTodo, ListTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        ///save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let ListTodosCopy = [...ListTodos]
            let objIndex = ListTodosCopy.findIndex(item => item.id == todo.id);

            ListTodosCopy[objIndex].title = editTodo.title
            this.setState({
                ListTodos: ListTodosCopy,
                editTodo: {}
            })
            toast.success('Update succeed')
            return
        }


        ///edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { ListTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {ListTodos && ListTodos.length > 0 &&
                        ListTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} -  {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input

                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} -  {item.title}
                                                </span>
                                            }
                                        </>

                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button
                                        className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })

                    }


                </div>
            </div>
        )
    }
}

export default ListTodo