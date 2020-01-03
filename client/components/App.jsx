//App file
import React from 'react';
import List from './List.jsx';

///////stateful class component///////////
class App extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            todo: '',
            todos: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state)) 
        //this logs what was input on console.
    }



    render() {
        return (
            <div>
                {
                this.state.firstName === this.state.firstName &&
                 this.state.lastName === this.state.lastName ? (<List />) : (
                    <form>
                    <div></div>
                    <label>
                        First Name: 
                    <input name="firstName" placeholder='Type First Name' onChange={this.onChangeHandler}/>
                    </label>
                    <label>
                        Last Name: 
                    <input name="lastName" placeholder='Type Last Name' onChange={this.onChangeHandler}/>
                    </label>
                </form>
                )
                }
            </div>
        )
    }
}
export default App;

////////functional component////////////
// function App (props) { 
//    return (
//        <div> Hello form App component</div>
//    )
// }
