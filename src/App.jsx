import React, { useContext } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SendOtp from "./pages/SendOtp/SendOtp";
import Login from "./pages/Login/Login";
import ChangePassword from "./pages/ChangePasword/ChangePassword";
import UserRegistration from "./pages/user-registration/UserRegistration";
import PrivateRoute from "./routes/PrivateRoute";
import AddEmp from "../src/pages/add_employee/AddEmp";
import { UserContext } from "../Context";
import Employees from "./pages/table/Employees";
import EmployeeRoute from "./routes/EmployeeRoute";
import { ToastContainer } from "react-toastify";
import UserList from "./pages/user-list/UserList";
import EmployeeDashboard from "./pages/emp_dash/EmployeeDashboard";

function App() {
  const { user, loading } = useContext(UserContext);
console.log(user?.role)
  const Employeepages = [
    {
      component: ChangePassword,
      path: "/change-password",
      replace: true,
    },

    {
      component: EmployeeDashboard,
      path: "/emp-dashboard",
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
    {
      component: UserRegistration,
      path: "/user-registration",
      replace: true,
    },
    {
      component: UserList,
      path: "/user-list",
      replace: true,
    },
  ];

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
              {user?.role === "ADMIN" && AdminPages.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<PrivateRoute>{<item.component />}</PrivateRoute>}
                />
              ))}
              {user?.role === "EMPLOYEE" && Employeepages.map((item, index) => (
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
      <ToastContainer />
    </>
  );
}

export default App;
