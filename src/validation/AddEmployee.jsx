const AddEmployeeValidation = (value) => {
  let errors = {};

  if (!value.employeeName) {
    errors.employeeName = "Employee Name cannot be empty";
  }
  if (!value.employeeId) {
    errors.employeeId = "Employee ID cannot be empty";
  }
  if (!value.employeeStatus) {
    errors.employeeStatus = "Employee Status is required";
  }
  if (!value.designation) {
    errors.designation = "Designation is required";
  }
  if (!value.department) {
    errors.department = "Department is required";
  }
  if (!value.dateOfJoining) {
    errors.dateOfJoining = "Date Of Joining is required";
  }
  if (!value.dateOfLiving) {
    errors.dateOfLiving = "Date Of Leaving is required";
  }
  if (!value.attendanceCode) {
    errors.attendanceCode = "Attendance Code must be greater than 0";
  }
  if (!value.gender) {
    errors.gender = "Gender is required";
  }
  if (!value.contactNumber) {
    errors.contactNumber = "Contact number is required";
  } else if (value.contactNumber.length < 10) {
    errors.contactNumber = "Contact number must be 10 digits";
  }

  if (!value.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "Email is invalid";
  }

  if (!value.dateOfBirth) {
    errors.dateOfBirth = "Date of Birth is required";
  }

  if (!value.aadharNumber) {
    errors.aadharNumber = "Aadhar number is required";
  } else if (!/^\d{12}$/.test(value.aadharNumber.trim())) {
    errors.aadharNumber = "Aadhar number must be exactly 12 digits with no letters or special characters";
  }

  if (!value.panNumber) {
    errors.panNumber = "PAN number is required";
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value.panNumber.toUpperCase())) {
    errors.panNumber = "PAN number is invalid (e.g., ABCDE1234F)";
  }

  if (!value.address) {
    errors.address = "Address is required";
  }
  if (!value.accountNumber) {
    errors.accountNumber = "Account number is required";
  }

  if (!value.ifscCode) {
    errors.ifscCode = "IFSC code is required";
  } else if (/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value.ifscCode.toUpperCase())) {
    errors.ifscCode = "IFSC code is invalid";
  }

  if (!value.bankName) {
    errors.bankName = "Bank Name is required";
  }
  if (!value.companyName) {
    errors.companyName = "Bank Name is required";
  }
  if (!value.employeeSalary) {
    errors.employeeSalary = "Employee Salary is required";
  }
  if (!value.costtoCompany) {
    errors.costtoCompany = "Company cost is required";
  }
  if (!value.diduction) {
    errors.diduction = "Diduction field is required";
  }
  // if (!value.employeeImage) {
  //   errors.employeeImage = "Image is required";
  // }
  if (!value.uanNo) {
    errors.uanNo = "UAN number is required";
  }

  return errors;
};

export default AddEmployeeValidation;
