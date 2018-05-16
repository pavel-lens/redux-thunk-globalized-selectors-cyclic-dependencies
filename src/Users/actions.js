import { getSelectedUsers } from '../reducer';
import * as actionTypes from './actionTypes';

export const selectUser = id => ({
  type: actionTypes.SELECT_USER,
  id,
});

export const postUsers = () => (dispatch, getState) => {
  const ids = getSelectedUsers(getState());

  return dispatch({
    type: actionTypes.POST_USERS,
    ids,
  });
};
