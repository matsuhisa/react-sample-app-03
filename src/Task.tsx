import React, { FC, useState } from 'react'
import styled from 'styled-components'

interface Task {
  id: number
  subject: string
  description?: string
  pinned: boolean
}

interface TaskProps {
  task: Task
}

const Task: FC<TaskProps> = ({ task }) => {
  const [pinned, setPin] = useState(task.pinned)

  const pin = () => {
    setPin(pinned === true ? false:true)
  }

  return(
    <Task1 pinned={pinned} onClick={pin} aria-label={`${task.pinned}`} >
      <div>{task.id}</div>
      <div>{task.subject}</div>
      {task.description == '' ? <div>不明</div> : <div>{task.description}</div>}
    </Task1>
  )
}

const Task1 = styled.div<{pinned: boolean}>`
  border: 1px solid red;
  padding: .4em;
  &:hover {
    background-color: blue;
  };

  & + & {
    margin-top: 2em;
  };

  background: ${ props => props.pinned ? 'white' : 'palevioletred'};
`

export default Task