import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './../redux/tasksSlice';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (input) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Task</button>
    </>
  );
};

export default TaskInput;
