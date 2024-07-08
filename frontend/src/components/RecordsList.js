// src/components/RecordsList.js
import React from 'react';

const RecordsList = ({ data, handleEditChange, editing }) => {
  return (
    <div>
      <h2>Records List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Posting Year</th>
            <th>Posting Month</th>
            <th>Action Type</th>
            <th>Action Number</th>
            <th>Action Name</th>
            <th>Status</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="number"
                  value={row.quantity}
                  onChange={(e) =>
                    handleEditChange(index, "quantity", e.target.value)
                  }
                  disabled={!editing}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.amount}
                  onChange={(e) =>
                    handleEditChange(index, "amount", e.target.value)
                  }
                  disabled={!editing}
                />
              </td>
              <td>{row.postingYear}</td>
              <td>{row.postingMonth}</td>
              <td>
                <select
                  value={row.actionType}
                  onChange={(e) =>
                    handleEditChange(index, "actionType", e.target.value)
                  }
                  disabled={!editing}
                >
                  <option value="Type1">Type1</option>
                  <option value="Type2">Type2</option>
                  <option value="Type3">Type3</option>
                </select>
              </td>
              <td>{row.actionNumber}</td>
              <td>
                <select
                  value={row.actionName}
                  onChange={(e) =>
                    handleEditChange(index, "actionName", e.target.value)
                  }
                  disabled={!editing}
                >
                  <option value="Action1">Action1</option>
                  <option value="Action2">Action2</option>
                  <option value="Action3">Action3</option>
                </select>
              </td>
              <td>
                <select
                  value={row.status}
                  onChange={(e) =>
                    handleEditChange(index, "status", e.target.value)
                  }
                  disabled={!editing}
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td>
                <select
                  value={row.Impact}
                  onChange={(e) =>
                    handleEditChange(index, "Impact", e.target.value)
                  }
                  disabled={!editing}
                >
                  <option value="Low">Low</option>
                  <option value="Mid">Mid</option>
                  <option value="High">High</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordsList;
