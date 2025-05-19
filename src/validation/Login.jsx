const loginValidation = (value) => {
  let errors = {};
  if (!value.email) {
    errors.email = "Email is required";
  }
  if (!value.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export default loginValidation;
