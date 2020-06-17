import {observable, computed, action} from "mobx";
import TodoModel from './TodoModel';

export default class TodoListModel {
  @observable todos = [];

  @computed
  get unfinishedTodoCount(): number {
    return this.todos.filter(todo => !todo.finished).length
  }

  @action
  addTodo(title: string) {
    this.todos.push(new TodoModel(title))
  }
}