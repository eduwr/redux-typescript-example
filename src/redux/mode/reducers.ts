import { ModeState, ModeActionTypes, TOGGLE_MODE } from './types';
const initialState: ModeState = {
  addStudent: false
};

export const modeReducer = (state = initialState, action: ModeActionTypes) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return { ...state, addStudent: !state.addStudent };
    default:
      return state;
  }
};
