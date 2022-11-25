import axios from 'axios'
import { useEffect, useState, useMemo } from 'react'
import { useAlert } from 'react-alert'

import AddTask from './AddTask'
import TaskItem from './TaskItem'

import './Task.scss'
import { useCallback } from 'react'

const Task = () => {
  const alert = useAlert()

  const [tasks, setTasks] = useState([])

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        'https://fsc-task-manager-backend.herokuapp.com/tasks',
      )
      setTasks(data)
    } catch (_error) {
      alert.error('Não foi possível recuperar as tarefas')
    }
  }, [alert])

  const lastTask = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false)
  }, [tasks])

  const completedTask = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === true)
  }, [tasks])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <>
      <div className="tasks-container">
        <h2>Minhas Tarefas</h2>

        <div className="last-tasks">
          <h3>Últimas Tarefas</h3>
          <AddTask fetchTasks={fetchTasks} />
          <div className="tasks-list">
            {lastTask.map((taskNotCompleted) => (
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
            {completedTask.map((taskCompleted) => (
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
