const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [{ username: "admin", password: "admin123", role: "admin" }];

// Dummy data for records
let records = [
  {
    id: 1,
    quantity: 100,
    amount: 100,
    postingYear: 2020,
    postingMonth: "January",
    actionType: "Type1",
    actionNumber: "001",
    actionName: "Action1",
    status: "Pending",
    impact: "High",
  },
  {
    id: 2,
    quantity: 10,
    amount: 100,
    postingYear: 2020,
    postingMonth: "January",
    actionType: "Type2",
    actionNumber: "001",
    actionName: "Action2",
    status: "Pending",
    impact: "Mid",
  },
  {
    id: 3,
    quantity: 50,
    amount: 200,
    postingYear: 2021,
    postingMonth: "February",
    actionType: "Type1",
    actionNumber: "002",
    actionName: "Action3",
    status: "Approved",
    impact: "Low",
  },
  {
    id: 4,
    quantity: 20,
    amount: 150,
    postingYear: 2021,
    postingMonth: "March",
    actionType: "Type2",
    actionNumber: "003",
    actionName: "Action4",
    status: "Pending",
    impact: "High",
  },
  {
    id: 5,
    quantity: 80,
    amount: 300,
    postingYear: 2021,
    postingMonth: "March",
    actionType: "Type1",
    actionNumber: "004",
    actionName: "Action5",
    status: "In Progress",
    impact: "Mid",
  },
  {
    id: 6,
    quantity: 120,
    amount: 250,
    postingYear: 2020,
    postingMonth: "April",
    actionType: "Type2",
    actionNumber: "005",
    actionName: "Action6",
    status: "Approved",
    impact: "Low",
  },
  {
    id: 7,
    quantity: 30,
    amount: 180,
    postingYear: 2020,
    postingMonth: "April",
    actionType: "Type1",
    actionNumber: "006",
    actionName: "Action7",
    status: "Pending",
    impact: "High",
  },
  {
    id: 8,
    quantity: 90,
    amount: 400,
    postingYear: 2021,
    postingMonth: "May",
    actionType: "Type2",
    actionNumber: "007",
    actionName: "Action8",
    status: "In Progress",
    impact: "Mid",
  },
  {
    id: 9,
    quantity: 15,
    amount: 120,
    postingYear: 2021,
    postingMonth: "May",
    actionType: "Type1",
    actionNumber: "008",
    actionName: "Action9",
    status: "Pending",
    impact: "High",
  },
  {
    id: 10,
    quantity: 60,
    amount: 350,
    postingYear: 2020,
    postingMonth: "June",
    actionType: "Type2",
    actionNumber: "009",
    actionName: "Action10",
    status: "Approved",
    impact: "Low",
  },
];

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.json({ success: false });
  }
});
app.post("/api/addRecord", (req, res) => {
  const newRecord = req.body;
  res.json({ success: true, newRecord });
});

app.get("/api/records", (req, res) => {
  res.send(records);
});

// Update records endpoint
app.put("/api/updateRecords", (req, res) => {
  records = req.body;
  res.json({ success: true, records });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
