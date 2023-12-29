import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { v4 } from 'uuid';

const NewTask = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };

    dispatch(addTodo(todo));
    setTodoValue('');
  };

  return (
    <p>
      <label for="new-task">Add Item</label>
      <input
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
        id="new-task"
        type="text"
      />
      <button onClick={() => addTodoHandler()}>Add</button>
    </p>
  );
};

export default NewTask;
