const AddEmployeeValidation = (value) => {
    let errors = {};

    if(!value.employeeName){
        errors.employeeName = "Employee Name is required";
    }
    if(!value.employeeId){
        errors.employeeId = "Employee Id is required";
    }
}