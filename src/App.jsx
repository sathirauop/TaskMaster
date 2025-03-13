


// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import AppLayout from './components/layout/AppLayout';

import Error from './components/Error'

// Pages
import HomePage from './pages/home/HomePage';
import DashboardPage from './pages/dashboard/dashboardPage';
import TasksPage from './pages/task/TaskPage';
import { protectRoute } from './utils/routeUtils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCurrentUser } from './hooks/useAuth';
import { setAuthenticated, setUser } from './features/auth/authSlice';
// import TaskDetailPage from './pages/TaskDetailPage';
// import TimeTrackingPage from './pages/TimeTrackingPage';
// import ErrorPage from './pages/ErrorPage';



const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path : '/',
        element: <HomePage/>
      },
      {
        path : '/task',
        element: protectRoute(<TasksPage/>),
        errorElement: <Error/>,
      },
      {
        path : '/dashboard',
        element: protectRoute(<DashboardPage/>),
        errorElement: <Error/>,
      }
    ],
  
   },
  
  ])

  function App() {

    const dispatch = useDispatch();
    const { isLoading } = useCurrentUser();

      // Check for token on app startup
   useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (token && user) {
      dispatch(setAuthenticated(true));
      dispatch(setUser(user));
    } else {
      dispatch(setAuthenticated(false));
      dispatch(setUser(null));
    }
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }

    return (
        <RouterProvider router={router} />
    );
  }

export default App
