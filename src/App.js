import React from 'react'
import TodoForm from "../src/components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      task:"",
      id:Date.now(),
      todos: [],
      completed: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);

  }

  handleChange = event => {
    this.setState({
        task: event.target.value,
        id: Date.now(),

    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.state.todos.push(task);
    this.setState({
      task: "",
    })
  };

  clearCompleted(event) {
    event.preventDefault();
    const li = document.querySelectorAll('.strike-th');
    li.forEach( item => {
      item.classList.add('animated');
      item.classList.add('bounce');
      setTimeout( () => item.style.display = "none", 2000);

  });
}



  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <div className="container"/>

        <TodoList taskLists={this.state.todos} />
        <TodoForm
          value={this.state.task}
          submit={this.handleSubmit}
          update={this.handleChange}
          clear={this.clearCompleted}

        />
      </div>
    );
  }
}

export default App;