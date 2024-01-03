import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaPlus } from 'react-icons/fa';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category) {
      alert('Please fill in all fields');
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title,
      deadline: deadline.toISOString().split('T')[0],
      category,
      isUrgent,
    };

    addTask(newTask);

    setTitle('');
    setDeadline(new Date());
    setCategory('');
    setIsUrgent(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>Task Name:</label>
        <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="datepicker-wrapper">
        <label>Deadline :</label>
        <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
      </div>
      <div>
      <label>Work Type:</label>
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>
          Urgent: <input type="checkbox" checked={isUrgent} onChange={() => setIsUrgent(!isUrgent)} />
        </label>
      </div>
      <button type="submit">
        <FaPlus />
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
