import React, { Children } from "react";

const PrivateRoute = ({ Children }) => {
  const id = localStorage.getItem("id");

  if (!id) return <Navigate to="/login" replace />;

  return <>{Children}</>;
};

export default PrivateRoute;
