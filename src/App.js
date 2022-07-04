import React from 'react';
import AddExpense from './components/AddExpense';
import './style.css';

export default function App() {
  return (
    <>
      <img
        src="https://lh3.googleusercontent.com/pw/AM-JKLX0uYYwy7tSM0WNpcZEVvDQXNX9ClJU52qvw0kElnQx3COcCWP_3njr8XOw9Ow9pMKjAmNfCPQN9CfyfFE96xOFV6bzgZ6ffcG4QRvE9UUq_h1_ZZy3KnakixjJBIrTeK0XyqHhdO-Dtu5RZ6G7KQudSQ=w678-h903-no?authuser=0"
        height="350px"
        width="350px"
      />
      <AddExpense />
    </>
  );
}
