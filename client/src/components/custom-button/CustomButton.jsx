import React,{memo} from "react";
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
// Memo使用上要注意，因為花費會比只單純渲染元件還貴，如果元件/父元件沒有修改state就不應該使用
export default memo(CustomButtom);
