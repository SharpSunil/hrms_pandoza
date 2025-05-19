import React, { useState } from "react";

const UseForm = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
};

export default UseForm;
