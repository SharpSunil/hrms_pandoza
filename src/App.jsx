import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "../Context";
import SendOtp from "./pages/SendOtp/SendOtp";
import Login from "./pages/Login/Login";
import ChangePassword from "./pages/ChangePasword/ChangePassword";
import PrivateRoute from "./routes/PrivateRoute";
import Table from "./pages/table/Table";

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
            <Route path="/table" element={<Table />} />
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
