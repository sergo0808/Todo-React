import React, { useState, useEffect } from "react";
import StylesApp from "./App.module.css";
import Header from "../Header/Header";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { fetchTodos } from "../../store/todoSlice";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

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
      {status === "loading" && <h2>Loading.......</h2>}
      {error && <p>Ошибка {error}</p>}
      <TodoList />
    </div>
  );
};

export default App;
