import { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'

import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

import './AddTask.scss'

const AddTask = () => {
  const [task, setTask] = useState('')

  const onChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
      />
      <CustomButton>
        <BsPlusLg size={14} color="#ffffff" />
      </CustomButton>
    </div>
  )
}

export default AddTask
