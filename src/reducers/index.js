import { ADD_USER } from '../actions/ActionTypes';
import { USER_LOGIN } from '../actions/ActionTypes';
import { history } from '../helpers';

const initState = {
  users: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      const stateObj = Object.assign({}, state, {
        users: [
          ...state.users,
          {
            username: action.username,
            password: action.password
          }
        ]
      });
      history.push('/dashboard');
      return stateObj;

    case USER_LOGIN:
      return state.users.map(user => {
        if (
          user.username === action.username &&
          user.password === action.password
        ) {
          //   history.push('/');
        }
      });

    default:
      return state;
  }
};

export default reducer;
