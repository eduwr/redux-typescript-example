import React, { useState } from 'react';
import './styles.css';
import { GenderEnum, StudentActionEnum } from '../../redux/student/types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/index';
import { TOGGLE_MODE } from '../../redux/mode/types';

export const AddStudentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState('informe o gênero');
  const [score, setScore] = useState('');

  const mode = useTypedSelector((state) => state.mode);

  const parseGenderValue = (value: string): GenderEnum => {
    switch (value) {
      case 'Não informado':
        return GenderEnum.UNKNOWN;
      case 'Homem':
        return GenderEnum.MALE;
      case 'Mulher':
        return GenderEnum.FEMALE;
      case 'Não binário':
        return GenderEnum.NONBINARY;
      default:
        return GenderEnum.UNKNOWN;
    }
  };

  const dispatch = useDispatch();

  return (
    <div
      className="add-student-container"
      style={!mode.addStudent ? { display: 'none' } : { display: 'grid' }}
    >
      <div className="form-header">
        <h2>Acicionar Estudante</h2>
      </div>
      <div className="form-container">
        <form>
          <label>Nome</label>
          <input
            placeholder="Insira o seu nome."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Idade</label>
          <input
            type="number"
            placeholder="Insira a sua idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <label>Curso</label>
          <input
            placeholder="Insira o seu curso"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          ></input>
          <label>Média</label>
          <input
            placeholder="Insira a nota média do aluno"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          ></input>
          <label>Gênero</label>
          <input
            type="text"
            name="gender"
            list="gender-list"
            onChange={(e) => setGender(parseGenderValue(e.target.value))}
          ></input>
          <datalist id="gender-list">
            <option value="Não informado"></option>
            <option value="Homem"></option>
            <option value="Mulher"></option>
            <option value="Não binário"></option>
          </datalist>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: StudentActionEnum.CREATE_STUDENT,
                payload: {
                  name,
                  age,
                  course,
                  score,
                  gender
                }
              });
              dispatch({ type: TOGGLE_MODE });
            }}
          >
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
};
