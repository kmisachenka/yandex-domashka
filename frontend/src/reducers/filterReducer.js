import { produce } from 'immer';

import toggle from '../utils/toggle';

import { TOGGLE_COLOR } from '../constants';

const initialState = {
  colors: [],
};

/* eslint-disable no-param-reassign */
const rootReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_COLOR: {
        draft.colors = toggle(state.colors, action.payload.id);
        break;
      }
      default:
        break;
    }
  });

export default rootReducer;
