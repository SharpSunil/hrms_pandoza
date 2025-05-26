import React, { useContext } from 'react'
import { UserContext } from '../../Context';
import Page_Comp from '../comp/page_comp/Page_Comp';
import { Navigate } from 'react-router-dom';

const EmployeeRoute = ({children}) => {
  const {user,loading} = useContext(UserContext);
  const role = localStorage.getItem("role")



  if (loading) return <div>Loading...</div>;

  if (!user || role !== "EMPLOYEE") return <Navigate to="/login" replace />;

  return (
    <>
      <Page_Comp>{children}</Page_Comp>
    </>
  );
}

export default EmployeeRoute
