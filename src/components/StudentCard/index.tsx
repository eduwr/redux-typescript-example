import React from 'react';
import logo from '../../assets/profileIcon.svg';
import './styles.css';
import {
  Student,
  StudentActionEnum,
  GenderEnum
} from '../../redux/student/types';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

interface Props {
  student: Student;
}

export const StudentCard: React.FC<Props> = ({ student }) => {
  const dispatch = useDispatch();

  const parseGender = (gender: GenderEnum): string => {
    let output;

    switch (gender) {
      case GenderEnum.UNKNOWN:
        output = 'Desconhecido';
        break;
      case GenderEnum.NONBINARY:
        output = 'Não binário';
        break;
      case GenderEnum.MALE:
        output = 'Masculino';
        break;
      case GenderEnum.FEMALE:
        output = 'Feminino';
        break;
      default:
        output = 'Desconhecido';
    }

    return output;
  };

  return (
    <div className="student-card">
      <img src={logo} className="profile-picture" alt="profile" />
      <a href="" className="student-name">
        {student.name}
      </a>
      <div className="info-container">
        <span>
          <b>Idade:</b> {student.age}
        </span>

        <span>
          <b>Sexo:</b> {parseGender(student.gender)}
        </span>

        <span>
          <b>Curso:</b> {student.course}
        </span>

        <span>
          <b>Média:</b> {student.score}
        </span>
      </div>
      <div className="btn-container">
        <button
          onClick={() =>
            dispatch({
              type: StudentActionEnum.REMOVE_STUDENT,
              payload: student
            })
          }
        >
          <AiOutlineUserDelete className="delete-icon" />
        </button>
      </div>
    </div>
  );
};
