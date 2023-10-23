import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchtodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodos = createAsyncThunk(
  "todos/removeTodos",
  async function (id, { dispatch, rejectWithValue }) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Not remove. Server Error");
      }
      dispatch(deleteTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toogleTodos = createAsyncThunk(
  "todos/toogleTodos",
  async function (id, { dispatch, rejectWithValue }) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PATCH",
      });
      if (!response.ok) {
        throw new Error("Not toogle. Server Error");
      }
      dispatch(completedTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const handleResponse = (state, action) => {
  state.status = "Error";
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.unshift({
        title: action.payload.title,
        id: action.payload.id,
        completed: action.payload.completed,
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completedTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "fullfield";
      state.error = null;
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: handleResponse,
    [removeTodos.rejected]: handleResponse,
    [toogleTodos.rejected]: handleResponse,
  },
});

export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
