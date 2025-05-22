import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Page_Comp from "../comp/page_comp/Page_Comp";
import { UserContext } from "../../Context";

const PrivateRoute = ({ children }) => {

  const {user,loading} = useContext(UserContext);
  const role = localStorage.getItem("role")




  if (loading) return <div>Loading...</div>;

  if (!user || role !== "ADMIN") return <Navigate to="/login" replace />;

  return (
    <>
      <Page_Comp>{children}</Page_Comp>
    </>
  );
};

export default PrivateRoute;
