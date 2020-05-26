import React from 'react'

import Task from '../Task'

export default {
  title: 'Task/Task',
  component: Task,
}

const TaskDatum = {
  id: 1,
  subject: "タスクのタイトル",
  pinned: true,
}

const TaskFullDatum = {
  id: 2,
  subject: "タスクのタイトル",
  description: "中身もあります",
  pinned: false,
}

export const Default = () => (
  <Task task={TaskDatum}></Task>
)

export const Full = () => (
  <Task task={TaskFullDatum}></Task>
)