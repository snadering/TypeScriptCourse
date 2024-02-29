
interface Task {
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;
}

//Singleton
const taskManager = (() => {
    let tasks: Task[] = [];

    return {

        getTasks: () => tasks,

        addTask: (task: Task) => {
            tasks.push(task);
        },

        removeTask: (task: Task) => {
            tasks = tasks.filter(t => t !== task);
        },

        updateTaskCompletion: (task: Task, completed: boolean) => {
            const index = tasks.findIndex(t => t === task);
            if (index !== -1) {
                tasks[index].completed = completed;
            }
        },
    };
})();

export default taskManager;