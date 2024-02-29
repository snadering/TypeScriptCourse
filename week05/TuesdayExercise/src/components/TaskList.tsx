import React, { useEffect, useState } from 'react';
import Task from '../types/Task.ts';

interface ComponentProps {
    taskManager: {
        getTasks: () => Task[];
        addTask: (task: Task) => void;
        removeTask: (task: Task) => void;
        updateTaskCompletion: (task: Task, completed: boolean) => void;
    }
}

const TaskList: React.FC<ComponentProps> = ({ taskManager }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        setTasks(taskManager.getTasks())

    }, [tasks]);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <p>Task:</p>
                        {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
