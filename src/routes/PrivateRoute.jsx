import React, { Children } from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const id = localStorage.getItem("id");

  if (!id) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

export default PrivateRoute;
