import React from 'react';

const Todos = () => {
  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <li>
          <input type="checkbox" />
          <label>Pay Bills</label>
          <input type="text" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
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
