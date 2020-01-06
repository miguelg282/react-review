import React from 'react';
// import List from './List';

class ListEntry extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <li>{this.props.todo}/</li>
            </div>
        )
    }
}

export default ListEntry;