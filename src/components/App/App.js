import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StylesApp from "./App.module.css";
import Header from "../Header/Header";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const addHandleClick = (evt) => {
    evt.preventDefault();
    setTodo([
      ...todos,
      {
        id: uuidv4(),
        title: value,
        isCompleted: false,
      },
    ]);
    setValue("");
  };

  const deleteHandleClick = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
  };

  const handleClickCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodo(updatedTodos);
  };

  return (
    <div className={StylesApp.app}>
      <Header />
      <AddTodo value={value} setValue={setValue} onClick={addHandleClick} />
      <TodoList todos={todos} onDelete={deleteHandleClick} onCompleted={handleClickCompleted} />
    </div>
  );
};

export default App;
