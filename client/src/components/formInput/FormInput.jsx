import React from "react";
import {
  FormInputContainer,
  FormInputGroupContainer,
  FormInputLabel
} from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputGroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </FormInputLabel>
      )}
    </FormInputGroupContainer>
  );
};

export default FormInput;
