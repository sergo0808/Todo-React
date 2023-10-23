import React from "react";
import StylesTodoList from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeTodos, toogleTodos } from "../../store/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className={StylesTodoList.todoList}>
      {todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className={todo.completed ? StylesTodoList.completed : StylesTodoList.todoItem}>
            <p className={StylesTodoList.text}>{todo.title}</p>
            <ul className={StylesTodoList.buttonList}>
              <li>
                <button
                  className={StylesTodoList.deleteButton}
                  onClick={() => dispatch(removeTodos(todo.id))}></button>
              </li>
              <li>
                <button
                  className={StylesTodoList.completedButton}
                  onClick={() => dispatch(toogleTodos(todo.id))}></button>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
