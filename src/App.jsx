import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', deadline: '2024-01-10', category: 'Work', isUrgent: false },
    // Add more tasks as needed
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
   <div className="App">
      <h1>Time-based To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;

