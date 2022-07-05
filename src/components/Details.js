import React from 'react';

function Details({ title }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">$50</div>
    </div>
  );
}

export default Details;
