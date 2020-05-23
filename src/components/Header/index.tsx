import React from 'react';
import './styles.css';
import { TOGGLE_MODE } from '../../redux/mode/types';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/index';
import { Filter, FilterEnum } from '../../redux/filter/types';

export const Header: React.FC = () => {
  const mode = useTypedSelector((store) => store.mode);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div>
        <h1> {mode.addStudent ? 'Novo Aluno' : 'Alunos'}</h1>
      </div>
      <div className="header-btn-container">
        <button className="btn" onClick={() => dispatch({ type: TOGGLE_MODE })}>
          {mode.addStudent ? 'Return' : '+ Aluno'}
        </button>
        <div
          className="btn-wrapper"
          style={mode.addStudent ? { display: 'none' } : { display: 'inherit' }}
        >
          <button
            className="btn-left"
            onClick={() =>
              dispatch({
                type: FilterEnum.CHANGE_STUDENT_FILTER,
                payload: Filter.ALL
              })
            }
          >
            Todos
          </button>
          <button
            className="btn-center"
            onClick={() =>
              dispatch({
                type: FilterEnum.CHANGE_STUDENT_FILTER,
                payload: Filter.APPROVED
              })
            }
          >
            Aprovados
          </button>
          <button
            className="btn-right"
            onClick={() =>
              dispatch({
                type: FilterEnum.CHANGE_STUDENT_FILTER,
                payload: Filter.REPROVED
              })
            }
          >
            Reprovados
          </button>
        </div>
      </div>
    </div>
  );
};
