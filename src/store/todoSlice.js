import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos', 
  async function(_, {rejectWithValue}) {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      if (!res.ok) {
        throw new Error('Server Erorr')
      }
      const data = await res.json();
      return data
    } catch(error) {
      return rejectWithValue(error.message)
    }

  
  }
)

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async function(id, {rejectWithValue, dispatch}){
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) {
        throw new Error('Server Erorr')
      }
      dispatch(deleteTodo(id))
    } catch(error) {
      return rejectWithValue(error.message)
    }

  }
)

export const toogleTodos = createAsyncThunk(
  'todos/toogletodos',
  async function(id, {rejectWithValue, dispatch}){
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH'
      })
      if (!res.ok) {
        throw new Error('Server Error')
      }
      dispatch(completedTodo(id))

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }

)

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
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
      state.status = 'loading'
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'reslove'
      state.todos = action.payload
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
});

export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
