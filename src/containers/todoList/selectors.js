import { createSelector } from 'reselect';
import {filterTypes} from './constants';

const todoListSelector = state => state.todos.todoList;

const visibilityFilterSelector = state => state.todos.filter;

const filterTodoListSelector= (todos, filter) => {
  console.log('-----计算filterTodoList-----')
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
);

export const filterTypesSelector = () => filterTypes;
