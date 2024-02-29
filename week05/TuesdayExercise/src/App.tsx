import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import taskManager from './services/taskManager'

function App() {


  return (
    <>
      <TaskList taskManager={taskManager}/>
      <AddTaskForm taskManager={taskManager}/>
    </>
  )
}

export default App
