import { Navigate } from 'react-router-dom';
// import useAuth from 'hooks/useAuth';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = localStorage.getItem('token');
  // const { auth } = useAuth();


  return token ? <Navigate to={redirectTo} /> : Component;
};
