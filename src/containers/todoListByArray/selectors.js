import { createSelector } from 'reselect';
import {filterTypes} from './constants';

const todoListSelector = state => state.todosByArray.todoList;

const visibilityFilterSelector = (state) => state.todosByArray.filterArray;

const filterTodoListSelector= (todos, filterArray) => {
  console.log('-----计算filterTodoList--array -----')
  if (filterArray.length === 0) {
    return todos;
  }

  return todos.filter( todo => filterArray.includes(todo.completed));
}

export const getFilterTodoListSelector = createSelector(
  todoListSelector,
  visibilityFilterSelector,
  filterTodoListSelector
);

export const filterTypesSelector = () => filterTypes;
