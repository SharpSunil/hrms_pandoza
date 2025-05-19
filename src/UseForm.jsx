import React, { useEffect, useState } from "react";

const UseForm = (formObj, validate, callback) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const validationErrors = validate(values);
    setError(validationErrors);
    setIsSubmitting(true); 
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(error).length === 0) {
      callback();
      setIsSubmitting(false); 
    }
  }, [error, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    error,
    setError,
  };
};

export default UseForm;
