import React, { useEffect, useState } from "react";
import "./UserRegistration.scss";
import Input from "../../comp/input/Input";
import InputDropdown from "../../comp/dropdown/Dropdown";
import UserRegistrationValidation from "../../validation/UserRegistration";
import UseForm from "../../UseForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

function UserRegistration() {
  const [searchparams] = useSearchParams();

  const roleOption = [
    {
      value: "ADMIN",
      label: "Admin",
    },
    {
      value: "EMPLOYEE",
      label: "Employee",
    },
  ];

  const formObj = {
    email: "",
    password: "",
    role: "",
  };

  const token = localStorage.getItem("token");

  const userId = searchparams.get("userId");

  const handleUserRegistration = async () => {
    try {
      let response;

      if (userId) {
        response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}Admin/UpdateUser/${userId}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("User update successfully!");
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}Admin/RegisterUser`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setValues({
          email: "",
          password: "",
          role: "",
        });

        toast.success("User registered successfully!");
      }
    } catch (error) {
      console.log(error);
      const responseMsg = error?.response?.data?.responseMessage;

      if (responseMsg === "Email alraedy availabale") {
        toast.error(responseMsg);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  // get  user by id
  const getUserById = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}Admin/getUserById/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response, "responseresponse>>>");

      const data = response.data.data;
      setValues({
        email: data.email,
        password: data.password,
        role: data.role,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId) {
      getUserById();
    }
  }, []);

  const { handleChange, handleSubmit, values, error, setValues } = UseForm(
    formObj,
    UserRegistrationValidation,
    handleUserRegistration
  );

  return (
    <>
      <div className="parent user-registration">
        <div className="cont user-registration-cont">
          <form onSubmit={handleSubmit} class="wrapper-user-regi">
            <div class="form-row">
              <Input
                placeholder="Email"
                label="Email"
                name="email"
                value={values.email}
                onchange={handleChange}
                error={error.email}
                type="email"
              />
            </div>

            <div class="form-row">
              <Input
                placeholder="Password"
                label="Password"
                name="password"
                value={values.password}
                onchange={handleChange}
                error={error.password}
              />
            </div>

            <div class="form-row">
              <InputDropdown
                placeholder="Role"
                label="Role"
                name="role"
                value={values.role}
                onchange={handleChange}
                error={error.role}
              >
                <option>Select Role</option>
                {roleOption.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </InputDropdown>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
