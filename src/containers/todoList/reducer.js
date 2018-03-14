import {exampleState as defaultState} from './constants';

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'TOOGLETODO_ACTION':
      return Object.assign({}, state, {filter: action.payload})
    default:
      return state;
  }
}
