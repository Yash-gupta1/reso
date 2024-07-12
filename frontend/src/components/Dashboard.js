// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import ImpactChart from './ImpactChart';
import RecordsList from './RecordsList';

const Dashboard = ({ role }) => {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://reso-4.onrender.com")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleEditChange = (index, key, value) => {
    const newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  const handleSave = () => {
    axios
      .put("https://reso-4.onrender.com", data)
      .then((response) => {
        console.log("Records updated successfully:", response.data);
        setEditing(false);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
        fetchData(); 
      })
      .catch((error) => console.error("Error updating records:", error));
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {showSuccessMessage && (
        <p className="success-message">Data saved successfully!</p>
      )}
      <ImpactChart data={data} />
      <RecordsList data={data} handleEditChange={handleEditChange} editing={editing} />
      {editing ? (
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className="edit-button" onClick={() => setEditing(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default Dashboard;
