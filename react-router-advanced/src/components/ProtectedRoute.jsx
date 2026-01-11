import React from 'react';
import { Navigate } from 'react-router-dom';

// Simple mock authentication hook
const useAuth = () => {
  // Can changed to 'true' to test the protected access
  const user = { isAuthenticated: false }; 
  return user.isAuthenticated;
};

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  return auth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;