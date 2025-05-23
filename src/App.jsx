import React, { useContext } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SendOtp from "./pages/SendOtp/SendOtp";
import Login from "./pages/Login/Login";
import ChangePassword from "./pages/ChangePasword/ChangePassword";
import PrivateRoute from "./routes/PrivateRoute";
import AddEmp from "../src/pages/add_employee/AddEmp";
import { UserContext } from "../Context";
import Employees from "./pages/table/Employees"
import EmployeeRoute from "./routes/EmployeeRoute";

function App() {
  const { user, loading } = useContext(UserContext);

  const Employeepages = [
   
    {
      component: ChangePassword,
      path: "/change-password",
      replace: true,
    },
  ];

  const AdminPages = [
     {
      component: AddEmp,
      path: "/add_employee",
      replace: true,
    },
    {
      component: Employees,
      path: "/",
      replace: true,
    },
    {
      component: ChangePassword,
      path: "/change-password",
      replace: true,
    },
  ]

  if (loading) {
    
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route path="/login" element={<Login />} replace />
              {AdminPages.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<PrivateRoute>{<item.component />}</PrivateRoute>}
                />
              ))}
              {Employeepages.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<EmployeeRoute>{<item.component />}</EmployeeRoute>}
                />
              ))}
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} replace />
              <Route path="/otp" element={<SendOtp />} />
              <Route path="/change-password" element={<ChangePassword />} />

              <Route path="*" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
