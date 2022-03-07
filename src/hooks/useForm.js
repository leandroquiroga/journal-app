import { useState } from "react"

export const useForm = (initalState = {}) => {

  const [valueForm, setValue] = useState(initalState);

  const handleValueForm = ({ target }) => {
    
    setValue({
      ...valueForm,
      [target.name]: target.value,
    });
  }; 

  return [valueForm, handleValueForm];
}