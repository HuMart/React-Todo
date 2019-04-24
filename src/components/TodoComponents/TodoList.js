// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from './Todo'


const TodoList = props => {

    return (
      <div>
        {props.taskLists.map(listItem => {
          return (
            <Todo key={listItem.id} value={listItem.task} completed={listItem.completed} />
          )
        })}
      </div>
    );
  }


export default TodoList 
