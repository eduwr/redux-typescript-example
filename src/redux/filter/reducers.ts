import { FilterState, Filter, FilterActionTypes, FilterEnum } from './types';

const initialState: FilterState = {
  studentFilter: Filter.ALL
};

export function filterReducer(
  state = initialState,
  action: FilterActionTypes
): FilterState {
  switch (action.type) {
    case FilterEnum.CHANGE_STUDENT_FILTER:
      return {
        ...state,
        studentFilter: action.payload
      };

    default:
      return state;
  }
}
