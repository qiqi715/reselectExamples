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
    },
    {
      completed: false,
      title: "第6个任务"
    },
    {
      completed: false,
      title: "第7个任务"
    },
    {
      completed: true,
      title: "第8个任务"
    },
    {
      completed: false,
      title: "第9个任务"
    },
    {
      completed: false,
      title: "第10个任务"
    }
  ],
  filterArray: []// [] [true] [false] [true, false]   { isCompleted: true, isImportant: false }
}

export const filterTypes = [
  {
    type: 'SHOW_COMPLETED',
    completed: true
  },
  {
    type: 'SHOW_ACTIVE',
    completed: false
  }
]
