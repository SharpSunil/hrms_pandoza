import React from "react";
import "./UserRegistration.scss";
import Input from "../../comp/input/Input";
import InputDropdown from "../../comp/dropdown/Dropdown";
import UserRegistrationValidation from "../../validation/UserRegistration";
import UseForm from "../../UseForm";
import axios from "axios";
import { toast } from "react-toastify";

function UserRegistration() {
  const formObj = {
    email: "",
    password: "",
    role: "",
  };

  const option = [
    {
      value: "ADMIN",
      label: "Admin",
    },
    {
      value: "EMPLOYEE",
      label: "Employee",
    },
  ];

  const token = localStorage.getItem("token");

  const handleUserRegistration = async () => {
    try {
      const response = await axios.post(
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
                {option.map((item, index) => (
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
