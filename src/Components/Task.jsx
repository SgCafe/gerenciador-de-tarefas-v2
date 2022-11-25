import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'

import AddTask from './AddTask'
import TaskItem from './TaskItem'

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
    } catch (_error) {
      alert.error('Não foi possível recuperar as tarefas')
    }
  }
  return (
    <>
      <div className="tasks-container">
        <h2>Minhas Tarefas</h2>

        <div className="last-tasks">
          <h3>Últimas Tarefas</h3>
          <AddTask fetchTasks={fetchTasks} />
          <div className="tasks-list">
            {tasks
              .filter((task) => task.isCompleted === false)
              .map((taskNotCompleted) => (
                <TaskItem
                  key={taskNotCompleted._id}
                  task={taskNotCompleted}
                  fetchTasks={fetchTasks}
                />
              ))}
          </div>
        </div>
        <div className="completed-tasks">
          <h3>Tarefas Concluídas</h3>
          <div className="tasks-list">
            {tasks
              .filter((task) => task.isCompleted === true)
              .map((taskCompleted) => (
                <TaskItem
                  key={taskCompleted._id}
                  task={taskCompleted}
                  fetchTasks={fetchTasks}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Task
