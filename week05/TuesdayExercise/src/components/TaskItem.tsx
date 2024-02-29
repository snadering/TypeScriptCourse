// components/TaskItem.tsx

import React from 'react';
import taskManager from '../services/taskManager';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const handleCompleteToggle = () => {
    taskManager.updateTaskCompletion(task, !task.completed);
  };

  const handleDelete = () => {
    taskManager.removeTask(task);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate.toDateString()}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      <button onClick={handleCompleteToggle}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
