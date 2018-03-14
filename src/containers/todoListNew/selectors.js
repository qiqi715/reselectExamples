import { createSelector } from 'reselect'

const todoListSelector = state => state.todos.todoList;

const visibilityFilterSelector = state => state.todos.visibilityFilter;

const filterTodoListSelector= (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

export const getFilterTodoListSelector = createSelector(
  todoListSelector,
  visibilityFilterSelector,
  filterTodoListSelector
)
