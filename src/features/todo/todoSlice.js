import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

// Медиатор для хранения данных в localStorage
const DataMediator = {
  saveData: (data) => {
    localStorage.setItem('todos', JSON.stringify(data));
  },
  loadData: () => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  },
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: DataMediator.loadData(),
  },
  reducers: {
    // добавление todo'шки
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      DataMediator.saveData(state.todos); // сохраняем данные в медиатор
    },
    // отмечаем выполнение todo'шки
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
      DataMediator.saveData(state.todos); // сохраняем данные в медиатор
    },
    // удаление todo'шки
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      DataMediator.saveData(state.todos); // сохраняем данные в медиатор
    },
    // редактирование todo'шки
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      DataMediator.saveData(state.todos); // сохраняем данные в медиатор
    },
  },
});

export const { addTodo, toggleCompletedTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
