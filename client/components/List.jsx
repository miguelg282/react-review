import React from 'react';
import ReactDOM from 'react-dom';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: '',
            todos: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler (e) {
        e.preventDefault();
        this.setState ({
            [e.target.name]: e.target.value //[e.target.name] same as 'todo'.
        }, () => {console.log(this.state)})
    }

    onSubmitHandler (e) {
        e.preventDefault();
        
        let currentTodos = this.state.todos;
        currentTodos.push(this.state.todo);

        this.setState({
            todos: currentTodos,
            todo: ''
        }, () => {console.log(this.state)});
        document.getElementById('form').reset();
    }

    // CRUD (create, read, update, delete) 

    onSelectHandler () {
        e.preventDefault();
        this.setState({

        })
    }



    render() {
        return(
            <div>
                <form id='form' onSubmit={this.onSubmitHandler}>
                    <label>Todo List
                        {/* name='todo' is pointing to e.target.name */}
                        <input name='todo' required onChange={this.onChangeHandler}/>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
                <ul>
                {this.state.todos.map((todo, index) => (
                    <ListEntry todo={todo} key={index} index={index}/>
                ))}
                </ul>
            </div>
        )
    }
}


export default List;