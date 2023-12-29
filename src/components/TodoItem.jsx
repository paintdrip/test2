import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo, removeTodo } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <li>
      <input type="checkbox" onChange={() => toggleTodoHandler(todo.id)} />
      <label>{todo.text}</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button onClick={() => removeTodoHandler(todo.id)} className="delete">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
