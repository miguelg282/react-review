import React from 'react';
import ListEntry from './ListEntry.jsx';


//import { Component } from 'react'; ///same as below.
//class List extends Component {};
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: '',
            todos: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHander = this.onSubmitHander.bind(this);
    }

    onChangeHandler(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state)) 
        //this logs what was input on console.
    }


    onSubmitHander(e) {
        e.preventDefault();

        let currentTodos = this.state.todos;
        currentTodos.push(this.state.todo);

        this.setState({
            todos: currentTodos,
            todo: ''
        }, () => console.log(this.state))
        document.getElementById('form').reset();
    }

    render () {
        return (
            <div>
                <form id='form' onSubmit={this.onSubmitHander}>
                    <label>
                        New Todo:
                        <input name='todo' required onChange={this.onChangeHandler} placeholder='Enter todo'/>
                    </label>
                        <input type="submit" value="Submit"/>
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