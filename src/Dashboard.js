import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Context from "./Context";
import { useContext } from "react";

const Dashboard = () => {
  const {rows} = useContext(Context);

  return (
    <div className="summary-section">
      <h2 className="summary-title">Summary</h2>
      <div className="summary-item">
        <span className="summary-label">Total Products:</span>
        <span className="summary-value">{rows.length}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Total Orders:</span>
        <span className="summary-value">{3}</span>
      </div>
      <div className="navigation">
        <Link to="/homepage" className="navigation-link">Manage Products</Link>
        <Link to="/orders" className="navigation-link">Manage Orders</Link>
      </div>
    </div>
  );
}


export default Dashboard;
