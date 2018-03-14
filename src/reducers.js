import {combineReducers} from 'redux';

import reselect from './containers/reselectPage/reducer';
import todos from './containers/todoList/reducer';
import todosByArray from './containers/todoListByArray/reducer';

export default combineReducers({
  reselect,
  todos,
  todosByArray
});
