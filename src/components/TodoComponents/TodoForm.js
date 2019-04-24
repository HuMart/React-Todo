import React from "react";

class TodoForm extends React.Component {
  render() {

    return (
      <form>
        <input placeholder="Enter task" value={this.props.value} onChange={this.props.update} />
        <button onClick={this.props.submit}>Add todo</button>
        <button onClick={this.props.filter} onKeyUp={this.props.enter}>clear completed</button>
      </form>
    );
  }
}


export default TodoForm; 