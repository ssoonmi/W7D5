import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const login = (user) => dispatch => {
  const storeUser = (currentUser) => {
    return dispatch(receiveCurrentUser(currentUser));
  };

  const storeErrors = (errors) => {
    return dispatch(receiveErrors(errors));
  };
  return SessionAPIUtil.login(user).then(storeUser, storeErrors);
};

export const logout = () => dispatch => {
  const logoutUser = () => {
    return dispatch(logoutCurrentUser());
  };

  const storeErrors = (errors) => {
    return dispatch(receiveErrors(errors));
  };
  return SessionAPIUtil.logout().then(logoutUser, storeErrors);
};

export const signup = (user) => dispatch => {
  const storeUser = (currentUser) => {
    return dispatch(receiveCurrentUser(currentUser));
  };

  const storeErrors = (errors) => {
    return dispatch(receiveErrors(errors));
  };
  return SessionAPIUtil.signup(user).then(storeUser, storeErrors);
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
