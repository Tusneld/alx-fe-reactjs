import React from 'react';
import { Navigate } from 'react-router-dom';

// Simple hook to simulate authentication
const useAuth = () => {

  const user = localStorage.getItem('auth') === 'true'; 
  return { authenticated: user };
};

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuth();

  return authenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;