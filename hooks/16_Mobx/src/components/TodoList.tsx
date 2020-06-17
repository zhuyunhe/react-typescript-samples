import React from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

import Todo from './Todo';

type State = {
  [k: string]: any
}

type Props = {
  [k: string]: any
}

@observer
class TodoList extends React.Component<Props, State> {
  @observable newTodoTitle: string = "";
  render(){
    const {store} = this.props
    console.log(store.todos)
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo: 
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          >
          </input>
          <button type="submit">Add</button>
        </form>
        <hr></hr>
        <ul>
          {store.todos.map(todo => <Todo todo={todo} key={todo.id}></Todo>)}
        </ul>
        <p>
          Tasks left: {store.unfinishedTodoCount}
        </p>
      </div>
    )
  }
  

  @action
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.newTodoTitle = e.target.value;
  }

  @action
  handleFormSubmit = (e: React.FormEvent) => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}



export default TodoList;