import React from 'react'
import { useAuth } from './AuthProvider'
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRouter() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/Login" />;
}

export default PrivateRouter;