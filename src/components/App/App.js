import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StylesApp from "./App.module.css";
import Header from "../Header/Header";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addHandleClick = (evt) => {
    evt.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: text,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setText("");
  };

  return (
    <div className={StylesApp.app}>
      <Header />
      <AddTodo text={text} setText={setText} onClick={addHandleClick} />
      <TodoList />
    </div>
  );
};

export default App;
