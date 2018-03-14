export const exampleState = {
  todoList: [
    {
      completed: true,
      title: "第1个任务"
    },
    {
      completed: true,
      title: "第2个任务"
    },
    {
      completed: false,
      title: "第3个任务"
    },
    {
      completed: true,
      title: "第4个任务"
    },
    {
      completed: false,
      title: "第5个任务"
    }
  ],
  filter: 'SHOW_ALL'
}

export const filterTypes = [
  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE'
]
