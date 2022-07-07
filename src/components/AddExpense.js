import React from 'react';

function AddExpense() {
  return (
    <form>
      <label>Type</label>
      <select>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <label>Catergory</label>
      <select>
        <option value="income">Bussiness</option>
        <option value="expense">Salary</option>
      </select>
      <br />
      <label>Amount</label>
      <input type="number" />
      <label>Date</label>
      <input type="date" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddExpense;
