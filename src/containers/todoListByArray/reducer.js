import {exampleState as defaultState} from './constants';

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'TOOGLETODO_ACTION':
      return Object.assign({}, state, {filterArray: action.payload})
    default:
      return state;
  }
}
