import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Dashboard() {
  return (
    <div className='container'>
      {/* Header */}
      <h1 className='text-center'>Dashboard</h1>
      {/* Welcome message */}
      <p className='text-center'>Welcome to the Library Management System Admin Dashboard.</p>
      {/* Navigation buttons */}
      <div className='d-flex justify-content-center gap-3'>
        {/* Link to the Books management page */}
        <Link to={'/books'}>
          <button className='btn btn-primary'>Add Books</button>
        </Link>
        {/* Link to the Authors management page */}
        <Link to={'/authors'}>
          <button className='btn btn-primary'>Add Authors</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

