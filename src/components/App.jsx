import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterPage from 'pages/RegisterPage';
import Header from './Header';
import { Dashboard } from './dashbord/Dashboard';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';
import { Currency } from './currency/Currency';
import HomePage from 'pages/HomePage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';
import LoginPage from 'pages/LoginPage';
import operations from 'redux/auth/authOperation';
import AuthSelectors from 'redux/auth/authSelectors';

import Layout from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.currentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivatRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="diagram" element={<StatisticPage />} />

            <Route path="currency" element={<Currency />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
