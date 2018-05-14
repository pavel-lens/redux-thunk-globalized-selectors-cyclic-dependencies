import { getSelectedUsers } from '../reducer';

export const ActionTypes = {
  SELECT_USER: 'SELECT_USER',
  POST_USERS: 'POST_USERS',
};

export const selectUser = id => ({
  type: ActionTypes.SELECT_USER,
  id,
});

export const postUsers = () => (dispatch, getState) => {
  // const ids = getSelectedUsers(getState());

  return dispatch({
    type: ActionTypes.POST_USERS,
    // ids,
  });
};
