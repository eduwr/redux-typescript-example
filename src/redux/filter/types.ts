export enum Filter {
  ALL = 'ALL',
  APPROVED = 'APPROVED',
  REPROVED = 'REPROVED'
}

export interface FilterState {
  studentFilter: Filter;
}

export enum FilterEnum {
  CHANGE_STUDENT_FILTER = 'CHANGE_STUDENT_FILTER'
}

interface filterAction {
  type: FilterEnum;
  payload: Filter;
}

export type FilterActionTypes = filterAction;
