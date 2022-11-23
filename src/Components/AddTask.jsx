import { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { useAlert } from 'react-alert'

import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

import './AddTask.scss'
import axios from 'axios'

const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState('')

  const alert = useAlert()

  const onChange = (e) => {
    setTask(e.target.value)
  }

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error(
          'A tarefa precisa ter uma descrição para ser adicionada.',
        )
      }

      await axios.post('https://fsc-task-manager-backend.herokuapp.com/tasks', {
        description: task,
        isCompleted: false,
      })

      await fetchTasks()

      setTask('')

      alert.success('A tarefa adicionada com sucesso!')
    } catch (error) {
      alert.error('Algo deu errado.')
    }
  }

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <BsPlusLg size={14} color="#ffffff" />
      </CustomButton>
    </div>
  )
}

export default AddTask
