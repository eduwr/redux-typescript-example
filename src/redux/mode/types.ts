export interface ModeState {
  addStudent: boolean;
}

export const TOGGLE_MODE = 'TOGGLE_MODE';

interface ToggleMode {
  type: typeof TOGGLE_MODE;
}

export type ModeActionTypes = ToggleMode;
