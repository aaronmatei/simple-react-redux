import { ADD_USER } from './ActionTypes';
import { USER_LOGIN } from './ActionTypes';

export const addUser = payload => {
  return {
    type: ADD_USER,
    payload
  };
};
export const loginUser = payload => {
  return {
    type: USER_LOGIN,
    payload
  };
};
