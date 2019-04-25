import React from "react";

export default class TodoForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input:''
        }
    }

    onUpdate = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.input) return;
        this.props.addTodo(this.state.input);
        this.setState({input: ''});
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                placeholder='Enter Task'
                type='text'
                name='input'
                id='new-task'
                value={this.state.input}
                onChange={this.onUpdate}
                />
                <button type='submit'>Add Task</button>

            </form>
        )
    }
}