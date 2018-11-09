import { connect } from 'react-redux';
import Greeting from './Greeting';
import {logout} from '../actions/session_actions';

const msp = (state) => {
  const {currentUserId} = state.session;
  const currentUser = state.entities.users[currentUserId];
  return {
    currentUserId,
    currentUser,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(msp, mdp)(Greeting);
