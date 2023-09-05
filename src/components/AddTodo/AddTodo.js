import React from "react";
import StylesAddTodo from "./AddTodo.module.css";

const AddTodo = ({ onClick, value, setValue }) => {
  return (
    <form className={StylesAddTodo.form}>
      <input
        className={StylesAddTodo.input}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <button className={StylesAddTodo.button} onClick={onClick}>
        Добавить задачу
      </button>
    </form>
  );
};

export default AddTodo;
