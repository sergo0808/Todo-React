import React from "react";
import StylesAddTodo from "./AddTodo.module.css";

const AddTodo = ({ onClick, text, setText }) => {
  return (
    <form className={StylesAddTodo.form}>
      <input
        className={StylesAddTodo.input}
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button className={StylesAddTodo.button} onClick={onClick}>
        Добавить задачу
      </button>
    </form>
  );
};

export default AddTodo;
