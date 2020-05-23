import React, { useEffect } from 'react';
import { StudentCard } from '../StudentCard/index';
import './styles.css';
import { useTypedSelector } from '../../redux/index';
import { AddStudentForm } from '../AddStudentForm';
import { Filter } from '../../redux/filter/types';
import { Student } from '../../redux/student/types';

export const StudentList: React.FC = (): JSX.Element => {
  const state = useTypedSelector((state) => state);

  const { students, mode, filter } = state;

  return (
    <>
      <div
        className="student-list"
        style={mode.addStudent ? { display: 'none' } : { display: 'grid' }}
      >
        {students.map((student, idx): JSX.Element | undefined => {
          if (
            filter.studentFilter === Filter.REPROVED &&
            Number(student.score) < 7
          ) {
            return <StudentCard student={student} key={idx + 1}></StudentCard>;
          } else if (
            filter.studentFilter === Filter.APPROVED &&
            Number(student.score) >= 7
          ) {
            return <StudentCard student={student} key={idx + 1}></StudentCard>;
          } else if (filter.studentFilter === Filter.ALL) {
            return <StudentCard student={student} key={idx + 1}></StudentCard>;
          }
        })}
      </div>
      <AddStudentForm />
    </>
  );
};
