import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {todos?.map((todo) => {
          if (!todo.completed) {
            return <TodoItem todo={todo} key={todo.id} />;
          }
        })}
      </ul>
    </>
  );
};

export default Todos;
