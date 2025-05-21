import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "../Context";
import SendOtp from "./pages/SendOtp/SendOtp";
import Login from "./pages/Login/Login";
import ChangePassword from "./pages/ChangePasword/ChangePassword";
import PrivateRoute from "./routes/PrivateRoute";
import AddEmp from "./pages/add_employee/AddEmp";

function App() {
  const pages = [
    {
      component: AddEmp,
      path: "/add_employee",
      replace: true,
    },
    {
      component: SendOtp,
      path: "/otp",
      replace: true,
    },
    {
      component: ChangePassword,
      path: "/change-password",
      replace: true,
    },
  ];

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<SendOtp />} />
            <Route path="/change-password" element={<ChangePassword />} />
      
            {pages.map((item, index) => {
              const Component = item.component;
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <PrivateRoute>
                      <Component />
                    </PrivateRoute>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
