import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import TaskItem from './Components/TaskItem'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        'https://fsc-task-manager-backend.herokuapp.com/tasks',
      )
      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {tasks.map((task, key) => (
        <TaskItem tarefa={task} key={key} />
      ))}
    </>
  )
}

export default App
