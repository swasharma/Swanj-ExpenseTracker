import React from 'react';
import './style.css';
import Details from './components/Details';
import Main from './components/Main';

export default function App() {
  return (
    <div className="app">
      <Details title="Income" />
      <Main />
      <Details title="Expense" />
    </div>
  );
}
