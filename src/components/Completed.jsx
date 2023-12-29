import React from 'react';

const Completed = () => {
  return (
    <>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li>
          <input type="checkbox" checked />
          <label>See the Doctor</label>
          <input type="text" />
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </li>
      </ul>
    </>
  );
};

export default Completed;
