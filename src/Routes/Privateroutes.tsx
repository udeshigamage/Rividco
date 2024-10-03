import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  const token = localStorage.getItem("token");
  console.log(token); // Get token from localStorage

  if (!token) {
    // If there's no token, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If there's a token, render the children (protected content)
  return <Outlet />;
};

export default PrivateRoutes;
