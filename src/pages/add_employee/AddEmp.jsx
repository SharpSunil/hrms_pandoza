import React, { useEffect } from "react";
import "./AddEmp.scss";
import Input from "../../comp/input/Input";
import UseForm from "../../UseForm";
import AddEmployeeValidation from "../../validation/AddEmployee";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const AddEmp = () => {
  const [searchparams] = useSearchParams();

  const formObj = {
    uid: "",
    employeeName: "",
    employeeId: "",
    employeeStatus: "",
    designation: "",
    department: "",
    dateOfJoining: "",
    dateOfLiving: "",
    attendanceCode: "",
    gender: "",
    contactNumber: "",
    email: "",
    dateOfBirth: "",
    aadharNumber: "",
    panNumber: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    companyName: "",
    employeeSalary: "",
    costtoCompany: "",
    esicNo: "",
    employeeImage: "",
    address: "",
    uanNo: "",
  };

  const employeeId = searchparams.get("employeeId");

  const token = localStorage.getItem("token");

  const addEmployeeData = async () => {
    try {
      let response;
      let formData = new FormData();

      const data = {
        uid: values.uid,
        eid: values.eid,
        employeeName: values.employeeName,
        employeeId: values.employeeId,
        employeeStatus: values.employeeStatus,
        designation: values.designation,
        department: values.department,
        dateOfJoining: values.dateOfJoining,
        dateOfLiving: values.dateOfLiving,
        attendanceCode: values.attendanceCode,
        gender: values.gender,
        contactNumber: values.contactNumber,
        email: values.email,
        dateOfBirth: values.dateOfBirth,
        aadharNumber: values.aadharNumber,
        panNumber: values.panNumber,
        accountNumber: values.accountNumber,
        ifscCode: values.ifscCode,
        bankName: values.bankName,
        companyName: values.companyName,
        employeeSalary: values.employeeSalary,
        costtoCompany: values.costtoCompany,
        diduction: values.diduction,
        address: values.address,
        uanNo: values.uanNo,
      };
      const newdata = {
        uid: values.uid,
        eid: values.eid,
        employeeName: values.employeeName,
        employeeId: `PSPL${values.employeeId}`,
        employeeStatus: values.employeeStatus,
        designation: values.designation,
        department: values.department,
        dateOfJoining: values.dateOfJoining,
        dateOfLiving: values.dateOfLiving,
        attendanceCode: values.attendanceCode,
        gender: values.gender,
        contactNumber: values.contactNumber,
        email: values.email,
        dateOfBirth: values.dateOfBirth,
        aadharNumber: values.aadharNumber,
        panNumber: values.panNumber,
        accountNumber: values.accountNumber,
        ifscCode: values.ifscCode,
        bankName: values.bankName,
        companyName: values.companyName,
        employeeSalary: values.employeeSalary,
        costtoCompany: values.costtoCompany,
        diduction: values.diduction,
        address: values.address,
        uanNo: values.uanNo,
      };

      if (employeeId) {
        formData.append("data", JSON.stringify(data));
      } else {
        formData.append("data", JSON.stringify(newdata));
      }

      formData.append("data", JSON.stringify(data));

      if (values.employeeImage) {
        formData.append("image", values.employeeImage);
      }

      if (employeeId) {
        response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}Admin/UpdateEmployee`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}Admin/AddEmployee`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const { handleChange, handleSubmit, values, setValues, error } = UseForm(
    formObj,
    AddEmployeeValidation,
    addEmployeeData
  );

  // get employeeDetails
  const getEmployeeDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}Admin/GetEmployee/${employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.data;

      setValues((prev) => ({
        ...prev,
        uid: data.uid,
        eid: data.eid,
        employeeName: data.employeeName,
        employeeId: data.employeeId,
        employeeStatus: data.employeeStatus,
        designation: data.designation,
        department: data.department,
        dateOfJoining: data.dateOfJoining,
        dateOfLiving: data.dateOfLiving,
        attendanceCode: data.attendanceCode,
        gender: data.gender,
        contactNumber: data.contactNumber,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        aadharNumber: data.aadharNumber,
        panNumber: data.panNumber,
        accountNumber: data.accountNumber,
        ifscCode: data.ifscCode,
        bankName: data.bankName,
        companyName: data.companyName,
        employeeSalary: data.employeeSalary,
        costtoCompany: data.costtoCompany,
        diduction: data.diduction,

        address: data.address,
        uanNo: data.uanNo || "Not Added",
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (employeeId) {
      getEmployeeDetails();
    }
  }, []);

  return (
    <>
      <div class="form_parent">
        <div class="form">
          <h2>Add Employee Details</h2>
          <form action="" onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="User"
                  label="User"
                  name="uid"
                  value={values.uid}
                  onchange={handleChange}
                  error={error.uid}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Employee Name"
                  label="Employee Name"
                  name="employeeName"
                  value={values.employeeName}
                  onchange={handleChange}
                  error={error.employeeName}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Employee Id"
                  label="Employee Id"
                  name="employeeId"
                  value={values.employeeId}
                  onchange={handleChange}
                  error={error.employeeId}
                  extra_label="PSPL"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Employee Status"
                  label="Employee Status"
                  name="employeeStatus"
                  value={values.employeeStatus}
                  onchange={handleChange}
                  error={error.employeeStatus}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Designation"
                  label="Designation"
                  name="designation"
                  value={values.designation}
                  onchange={handleChange}
                  error={error.designation}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Department"
                  label="Department"
                  name="department"
                  value={values.department}
                  onchange={handleChange}
                  error={error.department}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Date Of Joining"
                  label="Date Of Joining"
                  name="dateOfJoining"
                  type="date"
                  value={values.dateOfJoining}
                  onchange={handleChange}
                  error={error.dateOfJoining}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Date Of Living"
                  label="Date Of Living"
                  name="dateOfLiving"
                  type="date"
                  value={values.dateOfLiving}
                  onchange={handleChange}
                  error={error.dateOfLiving}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Attendance Code"
                  label="Attendance Code"
                  name="attendanceCode"
                  value={values.attendanceCode}
                  onchange={handleChange}
                  error={error.attendanceCode}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Gender"
                  label="Gender"
                  value={values.gender}
                  onchange={handleChange}
                  name="gender"
                  error={error.gender}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Contact Number"
                  label="Contact Number"
                  name="contactNumber"
                  value={values.contactNumber}
                  onchange={handleChange}
                  maxLength="10"
                  error={error.contactNumber}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onchange={handleChange}
                  error={error.email}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Date Of Birth"
                  label="Date Of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={values.dateOfBirth}
                  onchange={handleChange}
                  error={error.dateOfBirth}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Aadhar Number"
                  label="Aadhar Number"
                  name="aadharNumber"
                  value={values.aadharNumber}
                  onchange={handleChange}
                  error={error.aadharNumber}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Pan Number"
                  label="Pan Number"
                  name="panNumber"
                  value={values.panNumber}
                  onchange={handleChange}
                  error={error.panNumber}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Bank Account Number"
                  label="Bank Account Number"
                  name="accountNumber"
                  value={values.accountNumber}
                  onchange={handleChange}
                  error={error.accountNumber}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Ifsc Code"
                  label="Ifsc Code"
                  name="ifscCode"
                  value={values.ifscCode}
                  onchange={handleChange}
                  error={error.ifscCode}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Bank Namer"
                  label="Bank Name"
                  name="bankName"
                  value={values.bankName}
                  onchange={handleChange}
                  error={error.bankName}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Company Name"
                  label="Company Name"
                  name="companyName"
                  value={values.companyName}
                  onchange={handleChange}
                  error={error.companyName}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Employee Salary"
                  label="Employee Salary"
                  name="employeeSalary"
                  value={values.employeeSalary}
                  onchange={handleChange}
                  error={error.employeeSalary}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Cost To Company"
                  label="Cost To Company"
                  name="costtoCompany"
                  value={values.costtoCompany}
                  onchange={handleChange}
                  error={error.costtoCompany}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="ESIC no."
                  label="ESIC Number (if applicable)"
                  name="esicNo"
                  value={values.esicNo}
                  onchange={handleChange}
                  error={error.esicNo}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Employee Image"
                  type="file"
                  label="Employee Image"
                  name="employeeImage"
                  value={values.employeeImage}
                  onchange={handleChange}
                  error={error.employeeImage}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Address"
                  label="Address"
                  name="address"
                  value={values.address}
                  onchange={handleChange}
                  error={error.address}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="UAN Number"
                  label="UAN Number"
                  name="uanNo"
                  value={values.uanNo}
                  onchange={handleChange}
                  error={error.uanNo}
                />
              </div>
            </div>

            <div class="form-row">
              <button class="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmp;
