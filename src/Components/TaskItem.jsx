import React from 'react'

const TaskItem = ({ tarefa }) => {
  return (
    <>
      <h1>{tarefa.description}</h1>
      <p>{tarefa.isCompleted ? 'Completa' : 'Não completa'}</p>
    </>
  )
}

export default TaskItem
