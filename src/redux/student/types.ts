// configuar os tipos de estados

export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NONBINARY = 'NONBINARY',
  UNKNOWN = 'UNKNOWN'
}

export interface Student {
  name: string;
  age: number;
  gender: GenderEnum;
  course: string;
  score: number;
}

// configurar os tipos de actions
export enum StudentActionEnum {
  CREATE_STUDENT = 'ADD_STUDENT',
  REMOVE_STUDENT = 'REMOVE_STUDENT',
  CREATE_TEST = 'ADD_TEST',
  REMOVE_TEST = 'REMOVE_TEST'
}

interface createStudent {
  type: StudentActionEnum.CREATE_STUDENT;
  payload: Student;
}

interface removeStudent {
  type: StudentActionEnum.REMOVE_STUDENT;
  payload: Student;
}

export type StudentActionTypes = createStudent | removeStudent;
