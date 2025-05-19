import React, { useEffect, useState } from "react";

const UseForm = (formObj,validate,callback) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e)=>{
    const {name,value} = e.target;

    setValues({
        ...values,
        [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   setError(validate(values));

  };

  useEffect(()=>{
    if(Object.keys(error).length === 0){
        callback();

    }
  },[error]);

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    error,
    setError
  }
};

export default UseForm;
