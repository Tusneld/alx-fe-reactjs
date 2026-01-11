import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="details">Profile Details</Link> | {" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* This is where the nested components will be rendered */}
      <Outlet />
    </div>
  );
};

export default Profile;