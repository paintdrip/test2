import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  return (
    <li>
      <input type="checkbox" onChange={() => toggleTodoHandler(todo.id)} />
      <label className={todo.completed ? 'flex' : ''}>{todo.text}</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </li>
  );
};

export default TodoItem;
