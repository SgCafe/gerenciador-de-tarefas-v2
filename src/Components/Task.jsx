import axios from 'axios'
import { useEffect, useState } from 'react'
import './Task.scss'

const Task = () => {
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
      <div className="task-container">
        <h1>Minhas Tarefas</h1>
        <div className="last-tasks">
          <h2>Últimas Tarefas</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.isCompleted === false)
              .map((taskNotCompleted, key) => (
                <p key={key}>{taskNotCompleted.description}</p>
              ))}
          </div>
        </div>
        <div className="completed-tasks">
          <h2>Tarefas Concluídas</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.isCompleted === true)
              .map((taskCompleted, key) => (
                <p key={key}>{taskCompleted.description}</p>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Task
