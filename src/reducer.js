import { combineReducers } from 'redux';

import { getIds, reducer as users } from './Users';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;

export const getSelectedUsers = state => getIds(state.users);
