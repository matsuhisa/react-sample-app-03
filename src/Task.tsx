import React, { FC } from 'react'

interface Task {
  id: number
  subject: string
  description?: string
}

interface TaskProps {
  task: Task
}

const Task: FC<TaskProps> = ({ task }) => (
  <>
    <div>{task.id}</div>
    <div>{task.subject}</div>
    {task.description == '' ? <div>不明</div> : <div>{task.description}</div>}
  </>
)

export default Task