import { useState } from "react"

export const useForm = (initalState = {}) => {

  const [valueForm, setValue] = useState(initalState);
  
  const reset = (newState = initalState) => {
    setValue(newState);
  }
  const handleValueForm = ({ target }) => {
    
    setValue({
      ...valueForm,
      [target.name]: target.value,
    });
  }; 

  return [valueForm, handleValueForm, reset];
}