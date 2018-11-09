import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  const { currentUser } = action;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {
        [currentUser.id]: currentUser
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default usersReducer;
