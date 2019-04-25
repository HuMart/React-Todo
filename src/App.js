import React from 'react'
import TodoForm from "../src/components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList";

const task =[];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task    
    };
  }

  addTodo = todo => {
    this.setState({
      task: [
        ...this.state.task,{name: todo, completed: false, id: Date.now()}
      ]
    });
  }

  toggleOn = id => {
    this.setState({
      task : this.state.task.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
    });
  };

  removeCompleted = () => {
    this.setState({
      task: this.state.task.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>My Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
      </div>             
        <TodoList
          task={this.state.task}
          toggleOn={this.toggleOn}
        />
        <button onClick={this.removeCompleted}>Clear Completed</button>
      </div>
    )
  }
}
export default App;