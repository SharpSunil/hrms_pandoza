const UserRegistrationValidation = (value) => {
let errors = {};

if (!value.email) {
    errors.email = "Email is required";
}
if (!value.password) {
    errors.password = "Password is required";
}
if (!value.role) {
    errors.role = "Role is required";
}

return errors;
}

export default UserRegistrationValidation;