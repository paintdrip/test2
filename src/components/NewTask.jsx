import React from 'react';

const NewTask = () => {
  return (
    <p>
      <label for="new-task">Add Item</label>
      <input id="new-task" type="text" />
      <button>Add</button>
    </p>
  );
};

export default NewTask;
