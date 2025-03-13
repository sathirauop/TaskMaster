// src/utils/routeUtils.jsx
import ProtectedRoute from '../routes/ProtectedRoute';

/**
 * Wraps a route element with authentication protection
 * @param {JSX.Element} element The route element to protect
 * @returns {JSX.Element} Protected route element
 */
export const protectRoute = (element) => {
  return <ProtectedRoute>{element}</ProtectedRoute>;
};