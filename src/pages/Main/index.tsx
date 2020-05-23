import React from 'react';

import { Header } from '../../components/Header';
import { StudentList } from '../../components/StudentList/index';

import './styles.css';

export function Main() {
  return (
    <div className="App">
      <Header />
      <StudentList />
    </div>
  );
}
