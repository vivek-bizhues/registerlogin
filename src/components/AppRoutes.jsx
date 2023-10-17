import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import PrivateRoute from './ProtectedRoute';
import { useAuth } from '../Context/AuthContext';

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);

  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
        path="/home"
        element={<PrivateRoute isAuthenticated={isAuthenticated} element={<Home />} />}
    />
</Routes>
  );
};

export default AppRoutes;
