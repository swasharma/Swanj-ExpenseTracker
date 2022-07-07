import React from 'react';
import AddExpense from './AddExpense';

function Main({ title }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Expense Tracker</h3>
        <p>Powered By Speechly</p>
      </div>
      <div className="card-content text-center">
        <h3>Total Balance</h3>
        <p>Try Saying Add Income for $100 in Catergory Salary for Monday</p>
      </div>
      <div className="card-content text-center">
        <AddExpense />
      </div>
    </div>
  );
}

export default Main;
