import { StudentActionTypes, StudentActionEnum, Student } from './types';
// Funções retornam tipo da ação e podem ou não retornar um payload

export function createStudent(student: Student): StudentActionTypes {
  return {
    type: StudentActionEnum.CREATE_STUDENT,
    payload: student
  };
}

export function removeStudent(student: Student): StudentActionTypes {
  return {
    type: StudentActionEnum.REMOVE_STUDENT,
    payload: student
  };
}
