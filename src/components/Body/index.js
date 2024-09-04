import React from 'react';
import './index.css'; // Import the CSS file for styles

const Body = ({ isSidebarOpen }) => {
  return (
    <div className={`body-container ${isSidebarOpen ? 'shifted' : ''}`}>
      <div className="dashboard-header">
        <h1>ERP Dashboard</h1>
        <p>Overview of your ERP system activities</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h2>Total Sales</h2>
          <p>$120,000</p>
        </div>
        <div className="card">
          <h2>New Orders</h2>
          <p>320</p>
        </div>
        <div className="card">
          <h2>Pending Invoices</h2>
          <p>15</p>
        </div>
        <div className="card">
          <h2>Active Employees</h2>
          <p>85</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>Order #1023 has been shipped</li>
          <li>New employee John Doe added</li>
          <li>Invoice #4001 has been paid</li>
          <li>Product XYZ updated in inventory</li>
        </ul>
      </div>

      {/* Analytics Section */}
      <div className="analytics-section">
        <h2>Analytics</h2>
        <div className="analytics-content">
          <div className="chart">
            {/* Placeholder for a chart */}
            <h3>Sales Chart</h3>
            <p>Chart displaying sales trends</p>
          </div>
          <div className="chart">
            {/* Placeholder for another chart */}
            <h3>Inventory Levels</h3>
            <p>Chart showing current inventory levels</p>
          </div>
        </div>
      </div>

      {/* Employee Performance Section */}
      <div className="employee-performance">
        <h2>Employee Performance</h2>
        <div className="performance-content">
          <div className="employee-card">
            <h3>John Doe</h3>
            <p>Role: Sales Manager</p>
            <p>Performance: Excellent</p>
          </div>
          <div className="employee-card">
            <h3>Jane Smith</h3>
            <p>Role: Inventory Specialist</p>
            <p>Performance: Good</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;


