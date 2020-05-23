import {
  StudentActionTypes,
  StudentActionEnum,
  Student,
  GenderEnum
} from './types';

const initialState: Student[] = [
  {
    name: 'Eduardo',
    age: 31,
    course: 'Typescript',
    score: 9.5,
    gender: GenderEnum.MALE
  },
  {
    name: 'Aline',
    age: 26,
    course: 'FashionDesign',
    score: 10.0,
    gender: GenderEnum.FEMALE
  },
  {
    name: 'Henrique',
    age: 18,
    course: 'Direito',
    score: 9.5,
    gender: GenderEnum.MALE
  },
  {
    name: 'Henrique',
    age: 18,
    course: 'Direito',
    score: 6.5,
    gender: GenderEnum.MALE
  },
  {
    name: 'Aline',
    age: 26,
    course: 'FashionDesign',
    score: 4.0,
    gender: GenderEnum.FEMALE
  }
];

export const studentsReducer = (
  state = initialState,
  action: StudentActionTypes
): typeof initialState => {
  switch (action.type) {
    case StudentActionEnum.CREATE_STUDENT:
      const studentList = [...state, action.payload];
      return studentList;
    case StudentActionEnum.REMOVE_STUDENT:
      return state.filter((student) => student !== action.payload);

    default:
      return state;
  }
};
