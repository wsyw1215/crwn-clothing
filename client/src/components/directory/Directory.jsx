import React, { useState } from "react";
import { DirectoryMenuContainer } from './Directory.styles';
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => {
  const [menu] = useState(sections);
  return (
    <DirectoryMenuContainer>
      {menu.map(section => (
        <MenuItem {...section} key={section.id} />
      ))}
    </DirectoryMenuContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectSections
});
export default connect(mapStateToProps)(Directory);
