import React, { useState } from "react";
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => {
  const [menu] = useState(sections);
  return (
    <div className="directory-menu">
      {menu.map(section => (
        <MenuItem {...section} key={section.id} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectSections
});
export default connect(mapStateToProps)(Directory);
