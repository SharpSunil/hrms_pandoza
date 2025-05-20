import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Children }) => {
  const id = localStorage.getItem("id");

  if (!id) return <Navigate to="/login" replace />;

  return <>{Children}</>;
};

export default PrivateRoute;
