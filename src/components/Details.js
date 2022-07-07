import React from 'react';

function Details({ title }) {
  return (
    <div
      className={title == 'Income' ? 'card income-card' : 'card expense-card'}
    >
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">$50</div>
    </div>
  );
}

export default Details;
