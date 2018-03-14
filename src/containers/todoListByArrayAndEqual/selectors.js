import {filterTypes} from './constants';
import {
  createSelectorCreator,
  defaultMemoize
} from 'reselect'
import {isEqual} from 'lodash';
import deepEqual from 'deep-equal';
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  deepEqual
);

console.log(
  'isEqual',
  isEqual(
  [ true, false ],
    [ true, false ]
),
  isEqual(
    { a : [ 2, 3 ], b : [ 4 ] },
    { a : [ 2, 3 ], b : [ 4 ] }
),
isEqual(
    { x : 5, y : [6] },
    { x : 5, y : 6 }
));

console.log(
  'deepEqual',
  deepEqual(
  [ true, false ],
    [ true, false ]
),
  deepEqual(
    { a : [ 2, 3 ], b : [ 4 ] },
    { a : [ 2, 3 ], b : [ 4 ] }
),
deepEqual(
    { x : 5, y : [6] },
    { x : 5, y : 6 }
));
/*import { createSelectorCreator } from 'reselect'
import memoize from 'lodash.memoize'

const hashFn = (...args) => args.reduce(
  (acc, val) => acc + '-' + JSON.stringify(val),
  ''
)
const createDeepEqualSelector = createSelectorCreator(memoize, hashFn);*/

const todoListSelector = state => state.todosByArray.todoList;

const visibilityFilterSelector = (state) => state.todosByArray.filterArray;

// const filterTodoListSelector= (todos, filterArray) => {
//   console.log('-----计算filterTodoList--array and equal -----')
//   if (filterArray.length === 0) {
//     return todos;
// }
//
//   return todos.filter( todo => filterArray.includes(todo.completed));
// }

export const getFilterTodoListSelector = createDeepEqualSelector(
  todoListSelector,
  visibilityFilterSelector,
  (todos, filterArray) => {
    console.log('-----计算filterTodoList--array and equal -----')
    if (filterArray.length === 0) {
      return todos;
  }

    return todos.filter( todo => filterArray.includes(todo.completed));
  }
);

export const filterTypesSelector = () => filterTypes;
