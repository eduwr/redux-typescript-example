import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { studentsReducer } from './student/reducers';
import { filterReducer } from './filter/reducers';
import { modeReducer } from './mode/reducers';

export const rootReducer = combineReducers({
  students: studentsReducer,
  filter: filterReducer,
  mode: modeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
