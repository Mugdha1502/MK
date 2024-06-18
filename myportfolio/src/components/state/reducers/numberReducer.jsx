// src/state/reducers/numberReducer.jsx

import { UPDATE_NUMBER } from '../ActionCreators/actions';

const initialState = {
  count: 0,
};

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NUMBER:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default numberReducer;
