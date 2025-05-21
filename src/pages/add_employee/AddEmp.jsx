import React from "react";
import "./AddEmp.scss";
import Input from "../../comp/input/Input";

const AddEmp = () => {
  return (
    <>
      <div class="form_parent">
        <div class="form">
          <h2>Add Employee Details</h2>
          <form action="">
            <div class="form-row">
              <div class="half-row">
                <Input placeholder="Employee Name" label="Employee Name" name="employeeName" />
              </div>
              <div class="half-row">
                <Input placeholder="Employee Id" label="Employee Id" name="employeeId" />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input placeholder="Employee Status" label="Employee Status" name="employeeStatus" />
              </div>
              <div class="half-row">
                <Input placeholder="Designation" label="Designation" name="designation" />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input placeholder="Department" label="Department" name="department" />
              </div>
              <div class="half-row">
                <Input placeholder="Date Of Joining" label="Date Of Joining" name="dateOfJoining" />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input placeholder="Date Of Living" label="Date Of Living" name="dateOfLiving" />
              </div>
              <div class="half-row">
                <Input placeholder="Attendance Code" label="Attendance Code" name="attendanceCode" />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input placeholder="Gender" label="Gender" name="gender" />
              </div>
              <div class="half-row">
                <Input placeholder="Contact Number" label="Contact Number" name="contactNumber" />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                <Input placeholder="Email" label="Email" name="email" />
              </div>
              <div class="half-row">
                <Input placeholder="Date Of Birth" label="Date Of Birth" name="dateOfBirth" />
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                 <Input placeholder="Aadhar Number" label="Aadhar Number" name="aadharNumber" />
              </div>
              <div class="half-row">
                <Input placeholder="Pan Number" label="Pan Number" name="panNumber" />
               
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                 <Input placeholder="Bank Account Number" label="Bank Account Number" name="accountNumber" />
              </div>
              <div class="half-row">
                <Input placeholder="Ifsc Code" label="Ifsc Code" name="ifscCode" />
               
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                 <Input placeholder="Bank Namer" label="Bank Name" name="bankName" />
              </div>
              <div class="half-row">
                <Input placeholder="Company Name" label="Company Name" name="companyName" />
               
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                 <Input placeholder="Employee Salary" label="Employee Salary" name="employeeSalary" />
              </div>
              <div class="half-row">
                <Input placeholder="Cost To Company" label="Cost To Company" name="costtoCompany" />
               
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                 <Input placeholder="Deduction" label="Deduction" name="diduction" />
              </div>
              <div class="half-row">
                <Input placeholder="Employee Image" type="file" label="Employee Image" name="employeeImage" />
               
              </div>
            </div>
            <div class="form-row">
              <div class="half-row">
                 <Input placeholder="Address" label="Address" name="address" />
              </div>
              <div class="half-row">
                <Input placeholder="UAN Number" label="UAN Number" name="uanNo" />
               
              </div>
            </div>

            <div class="form-row">
              <button class="btn">
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
