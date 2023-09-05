import React from "react";
import StylesTodoList from "./TodoList.module.css";

const TodoList = ({ todos, onDelete, onCompleted }) => {
  return (
    <div className={StylesTodoList.todoList}>
      {todos
        ? todos.map((todo) => (
            <div
              key={todo.id}
              className={todo.isCompleted ? StylesTodoList.completed : StylesTodoList.todoItem}>
              <p className={StylesTodoList.text}>{todo.title}</p>
              <ul className={StylesTodoList.buttonList}>
                <li>
                  <button
                    className={StylesTodoList.deleteButton}
                    onClick={() => onDelete(todo.id)}></button>
                </li>
                <li>
                  <button
                    className={StylesTodoList.completedButton}
                    onClick={() => onCompleted(todo.id)}></button>
                </li>
              </ul>
            </div>
          ))
        : null}
    </div>
  );
};

export default TodoList;
