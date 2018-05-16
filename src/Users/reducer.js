import * as actionTypes from './actionTypes';

const initialState = {
  ids: [],
};

export default (state = initialState, { type, id }) => {
  switch (type) {
    case actionTypes.SELECT_USER:
      return { ids: [...state.ids, id] };
    default:
      return state;
  }
};

export const getIds = state => state.ids;
