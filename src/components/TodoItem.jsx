import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo, removeTodo, editTodo } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const editTodoHandler = (id) => {
    if (isEditing) {
      dispatch(editTodo({ id: todo.id, text: editedText }));
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li>
      {todo.completed ? (
        <input type="checkbox" onChange={() => toggleTodoHandler(todo.id)} checked />
      ) : (
        <input type="checkbox" onChange={() => toggleTodoHandler(todo.id)} />
      )}

      {isEditing ? (
        <>
          <input className="edit-input" value={editedText} onChange={handleInputChange} />
        </>
      ) : (
        <label>{todo.text}</label>
      )}
      <button className="edit" onClick={() => editTodoHandler(todo.id)}>
        Edit
      </button>
      <button onClick={() => removeTodoHandler(todo.id)} className="delete">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
