import React, { FC, useState, useEffect } from 'react'

interface Task {
  id: number
  subject: string
  description?: string
}

interface TaskProps {
  task: Task
}

const Task: FC<TaskProps> = ({ task }) => {
  const [count, setCount] = useState(0)

  const up = () =>(
    setCount(count + 1)
  )

  useEffect(() => {
    console.log(document.title)
    document.title = `タイトル${count}`
  })

  return(
    <>
      <div onClick={up}>{count}</div>
      <div>{task.id}</div>
      <div>{task.subject}</div>
      {task.description == '' ? <div>不明</div> : <div>{task.description}</div>}
    </>
  )
}

export default Task