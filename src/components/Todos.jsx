import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {todos?.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
        <li className="editMode">
          <input type="checkbox" />
          <label>Go Shopping</label>
          <input type="text" value="Go Shopping" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </>
  );
};

export default Todos;
