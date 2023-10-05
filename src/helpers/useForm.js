import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [formValues, setFormValues] = useState(initialValue);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
 
  };

  const resetForm = (initialValue) => {
    setFormValues(initialValue);
  };

  return { formValues, resetForm, onInputChange };
};

export default useForm;