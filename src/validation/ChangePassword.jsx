const changePasswordValidation = (value) => {
  let errors = {};
  if (!value.newPassword) {
    errors.newPassword = "New Password is required";
  }
  if (!value.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (value.newPassword !== value.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export default changePasswordValidation;
