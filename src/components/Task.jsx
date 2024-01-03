// import React from 'react';
// import moment from 'moment';

// const Task = ({ task }) => {
//   const deadlineDate = moment(task.deadline).format('MMMM DD, YYYY');

//   return (
//     <div className={`task ${task.isUrgent ? 'urgent' : ''}`}>
//       <h3>{task.title}</h3>
//       <p>Deadline: {deadlineDate}</p>
//       <p>Category: {task.category}</p>
//       <p>{task.isUrgent ? 'Urgent!' : ''}</p>
//     </div>
//   );
// };

// export default Task;


// src/components/Task.js
import React from 'react';
import moment from 'moment';

const Task = ({ task, onDelete }) => {
  const deadlineDate = moment(task.deadline).format('MMMM DD, YYYY');

  return (
    <div className={`task ${task.isUrgent ? 'urgent' : ''}`}>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-deadline">Deadline: {deadlineDate}</p>
      <p className="task-category">Category: {task.category}</p>
      <p className="task-urgent">{task.isUrgent ? 'Urgent!' : ''}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
