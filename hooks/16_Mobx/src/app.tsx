import React from "react";
import TodoList from './components/TodoList';
import TodoListModel from './models/TodoListModel';

const store = new TodoListModel()

export const App = () => {
    return (
        <div>
            <TodoList store={store}></TodoList>
        </div>
    )
}