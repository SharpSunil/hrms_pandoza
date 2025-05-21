import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import Page_Comp from "../comp/page_comp/Page_Comp";

const PrivateRoute = ({ children }) => {
  const id = localStorage.getItem("id");

  if (!id) return <Navigate to="/login" replace />;

  return (
    <>
      <Page_Comp>{children}</Page_Comp>
    </>
  );
};

export default PrivateRoute;
