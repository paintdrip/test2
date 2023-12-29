import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const Completed = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        {todos?.map((todo) => {
          if (todo.completed) {
            return <TodoItem todo={todo} key={todo.id} />;
          }
        })}
      </ul>
    </>
  );
};

export default Completed;
