import CustomInput from './CustomInput'
import './AddTask.scss'

const AddTask = () => {
  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar tarefa..." value="" />
    </div>
  )
}

export default AddTask
