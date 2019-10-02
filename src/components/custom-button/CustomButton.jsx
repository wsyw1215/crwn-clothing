import React from "react";
import { CustomButtonContainer } from "./Custom.styles";

const CustomButtom = ({
  children,
  ...otherProps
}) => {
  return (
    <CustomButtonContainer {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButtom;
