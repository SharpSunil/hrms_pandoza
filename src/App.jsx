import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "../Context";
import SendOtp from "./pages/SendOtp/SendOtp";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ChangePassword from "./pages/ChangePasword/ChangePassword";
import  PrivateRoute  from "./routes/PrivateRoute";

function App() {
  const pages = [
    {
      component: Login,
      path: "/login",
      replace: true,
    },
    {
      component: SendOtp,
      path: "/otp",
      replace: true,
    },
    {
      component: ForgotPassword,
      path: "/forgot-password",
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
            {pages.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<PrivateRoute>{<item.component />}</PrivateRoute>}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
