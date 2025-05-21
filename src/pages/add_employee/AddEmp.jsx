import React from "react";
import "./AddEmp.scss";
import Input from "../../comp/input/Input";
import UseForm from "../../UseForm";

const AddEmp = () => {
  const { handleChange, handleSubmit, values, setValues, error, setError } =
    UseForm();
  return (
    <>
      <div class="form_parent">
        <div class="form">
          <h2>Add Employee Details</h2>
          <form action="" onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Employee Name"
                  label="Employee Name"
                  name="employeeName"
                  value={values.employeeName}
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Employee Id"
                  label="Employee Id"
                  name="employeeId"
                  value={values.employeeId}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Designation"
                  label="Designation"
                  name="designation"
                  value={values.designation}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Date Of Joining"
                  label="Date Of Joining"
                  name="dateOfJoining"
                  value={values.dateOfJoining}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Date Of Living"
                  label="Date Of Living"
                  name="dateOfLiving"
                  value={values.dateOfLiving}
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Attendance Code"
                  label="Attendance Code"
                  name="attendanceCode"
                  value={values.attendanceCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Gender"
                  label="Gender"
                  value={values.gender}
                  onChange={handleChange}
                  name="gender"
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Contact Number"
                  label="Contact Number"
                  name="contactNumber"
                  value={values.contactNumber}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Date Of Birth"
                  label="Date Of Birth"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Pan Number"
                  label="Pan Number"
                  name="panNumber"
                  value={values.panNumber}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Ifsc Code"
                  label="Ifsc Code"
                  name="ifscCode"
                  value={values.ifscCode}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Company Name"
                  label="Company Name"
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Cost To Company"
                  label="Cost To Company"
                  name="costtoCompany"
                  value={values.employeeId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input
                  placeholder="Deduction"
                  label="Deduction"
                  name="diduction"
                  value={values.diduction}
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="Employee Image"
                  type="file"
                  label="Employee Image"
                  name="employeeImage"
                  value={values.employeeImage}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="half-row">
                <Input
                  placeholder="UAN Number"
                  label="UAN Number"
                  name="uanNo"
                  value={values.uanNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="form-row">
              <button class="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmp;
