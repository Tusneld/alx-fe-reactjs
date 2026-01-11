import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const ProfileDetails = () => <div>Profile Details Content</div>;
const ProfileSettings = () => <div>Profile Settings Content</div>;

const Profile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Outlet is used to render the matched child route */}
      <Outlet />
    </div>
  );
};

export default Profile;