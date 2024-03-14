import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AddItems from "./AddItems";
import Context from "./Context";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import OrderCalendar from "./OrderCalender";



function App() {
  const [rows, setRows] = useState([]);
  const [editData, setEditData] = useState(null);

  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>ERP SYSTEM</h1>
        </div>
        <Context.Provider value = {{setRows,rows,editData,setEditData}} >
        <Routes>
          <Route
            path="/add"
            element={<AddItems  />}
          />
          <Route
            path="/homepage"
            element={<HomePage  />}
          />
          <Route
            path="/edit/:id"
            element={<AddItems  />}
          />
          <Route
            path="/"
            element={<Dashboard  />}
          />
          <Route
            path="/orders"
            element={<Orders  />}
          />
          <Route
            path="/calender"
            element={<OrderCalendar  />}
          />
        </Routes>
        </Context.Provider>
      </div>
    </Router>
  );
}


export default App;

