// components/AddTaskForm.tsx

import React, { useState } from 'react';
import Task from '../types/Task';

interface ComponentProps {
  taskManager: {
      getTasks: () => Task[];
      addTask: (task: Task) => void;
      removeTask: (task: Task) => void;
      updateTaskCompletion: (task: Task, completed: boolean) => void;
  }
}

const AddTaskForm: React.FC<ComponentProps> = ({ taskManager }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const handleAddTask = () => {
    if (title && dueDate) {
      const newTask: Task = {
        title,
        description,
        dueDate: new Date(dueDate),
        completed: false,
      };
      console.log(newTask);
      
      taskManager.addTask(newTask);

      console.log(taskManager.getTasks())

      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </label>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;
