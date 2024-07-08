// src/components/RecordsList.js
import React from 'react';

const RecordsList = ({ data }) => {
  return (
    <div>
      <h2>Recently Updated Records</h2>
      <ul>
        {data.map((record) => (
          <li key={record.id}>
            {record.actionName} - {record.Impact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordsList;
