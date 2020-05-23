import { Filter, FilterActionTypes, FilterEnum } from './types';

export function changeStudentFilter(filter: Filter): FilterActionTypes {
  return {
    type: FilterEnum.CHANGE_STUDENT_FILTER,
    payload: filter
  };
}
