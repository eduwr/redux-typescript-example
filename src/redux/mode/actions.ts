import { ModeActionTypes, TOGGLE_MODE } from './types';
export function toggleAddStudentMode(): ModeActionTypes {
  return {
    type: TOGGLE_MODE
  };
}
