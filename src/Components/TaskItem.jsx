import React from 'react'
import { useAlert } from 'react-alert'
import axios from 'axios'

import './TaskItem.scss'
import { AiFillDelete } from 'react-icons/ai'

const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(
        `https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`,
      )

      await fetchTasks()

      alert.success('A tarefa foi deletada com sucesso!')
    } catch (error) {
      alert.error('Algo deu errado.')
    }
  }

  const handleTaskCompletedChange = async (e) => {
    try {
      await axios.patch(
        `https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`,
        {
          isCompleted: e.target.checked,
        },
      )

      await fetchTasks()

      alert.success('Sua tarefa foi modificada com sucesso!')
    } catch (error) {
      alert.error('Algo deu errado!')
    }
  }

  return (
    <div className="task-item-container">
      <div>
        <label
          className={
            task.isCompleted
              ? 'checkbox-container-completed'
              : 'checkbox-container'
          }
        >
          {task.description}
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(e) => handleTaskCompletedChange(e)}
          />
          <span
            className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
          ></span>
        </label>
      </div>

      <div className="delete">
        <AiFillDelete size={18} color="F44E4F" onClick={handleTaskDeletion} />
      </div>
    </div>
  )
}

export default TaskItem
