import React from 'react';
import AddExpense from './components/AddExpense';
import './style.css';

export default function App() {
  return (
    <>
      <img
        src="https://m.media-amazon.com/images/I/61-l8S81xVL._SL1500_.jpg"
        height="100px"
        width="100px"
      />
      <AddExpense />
    </>
  );
}
