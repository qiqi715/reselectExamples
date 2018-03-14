import {exampleState as defaultState} from './constants';

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
